use crate::common::*;

#[derive(Debug, Serialize)]
pub(crate) struct Post {
  pub(crate) title: String,
  date: String,
  content: String,
  read_time: String,
  height: String,
}

impl Post {
  pub(crate) fn from_path(path: PathBuf) -> Result<Self> {
    let content = fs::read_to_string(&path)?;

    Ok(Post {
      title: path.file_stem().unwrap().to_str().unwrap().to_string(),
      date: format!(
        "{}",
        fs::metadata(&path)?
          .created()?
          .into_datetime()
          .format("%m/%d — %Y")
      ),
      content: Parser::parse(&path)?,
      read_time: format!(
        "{:.1}",
        content.split_whitespace().count() as f32 / 150.0
      ),
      height: format!(
        "{:.2}",
        content.split('\n').count() as f32 * 18.0 * 0.0222
      ),
    })
  }
}
