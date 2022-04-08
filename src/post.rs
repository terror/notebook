use crate::common::*;

#[derive(Debug, Serialize)]
pub(crate) struct Post {
  pub(crate) title: String,
  date: String,
  content: String,
  read_time: f32,
  height: f32,
}

impl Post {
  pub(crate) fn from_path(path: PathBuf) -> Result<Self> {
    let content = fs::read_to_string(&path)?;

    Ok(Post {
      title: path.file_name().unwrap().to_str().unwrap().into(),
      date: format!(
        "{}",
        fs::metadata(&path)?
          .created()?
          .into_datetime()
          .format("%m/%d -- %Y")
      ),
      content: Parser::parse(&path)?,
      read_time: content.split_whitespace().count() as f32 / 150.0,
      height: content.split('\n').count() as f32 * 18.0 * 0.0222,
    })
  }
}
