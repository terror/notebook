use crate::common::*;

#[derive(Debug)]
pub(crate) struct Loader {
  path: PathBuf,
}

impl Loader {
  pub(crate) fn new(path: PathBuf) -> Self {
    Self { path }
  }

  pub(crate) fn load(&self) -> Result<Vec<Post>> {
    fs::read_dir(&self.path)?
      .collect::<Result<Vec<_>, _>>()?
      .iter()
      .map(|path| Post::from_path(path.path()))
      .collect::<Result<Vec<_>, _>>()
  }
}
