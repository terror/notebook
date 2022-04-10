use crate::common::*;

#[derive(Debug, Serialize)]
pub(crate) struct Post {
  pub(crate) title: String,
  pub(crate) file_stem: String,
  #[serde(skip_serializing)]
  pub(crate) datetime: DateTime<Utc>,
  pub(crate) date: String,
  pub(crate) content: String,
  pub(crate) read_time: String,
  pub(crate) height: String,
}

impl Ord for Post {
  fn cmp(&self, other: &Self) -> Ordering {
    self.datetime.cmp(&other.datetime)
  }
}

impl PartialOrd for Post {
  fn partial_cmp(&self, other: &Self) -> Option<Ordering> {
    Some(self.datetime.cmp(&other.datetime))
  }
}

impl PartialEq for Post {
  fn eq(&self, other: &Self) -> bool {
    self.datetime == other.datetime
  }
}

impl Eq for Post {}

impl Post {
  pub(crate) fn from_path(path: PathBuf) -> Result<Self> {
    let content = fs::read_to_string(&path)?;

    let Frontmatter { title } =
      YamlFrontMatter::parse::<Frontmatter>(&content)?.metadata;

    let date = fs::metadata(&path)?.created()?.into_datetime();

    Ok(Post {
      title,
      file_stem: path.file_stem().unwrap().to_str().unwrap().to_string(),
      datetime: date,
      date: date.format("%m/%d — %Y").to_string(),
      content: Parser::parse(&path)?,
      read_time: format!(
        "{:.1}",
        content.split_whitespace().count() as f64 / 150.0
      ),
      height: format!(
        "{:.2}",
        content.split('\n').count() as f64 * 18.0 * 0.0222
      ),
    })
  }
}
