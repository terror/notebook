use crate::common::*;

#[derive(Debug, StructOpt)]
pub(crate) enum Arguments {
  Generate,
  Serve,
}

impl Arguments {
  pub(crate) fn run(self) -> Result {
    use Arguments::*;

    match self {
      Generate => {
        Generator::run(Loader::new(PathBuf::from(CONTENT_PATH)).load()?)
      }
      Serve => Ok(()),
    }
  }
}
