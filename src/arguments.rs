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
      Serve => {
        rocket::ignite()
          .mount(
            "/",
            StaticFiles::from(concat!(env!("CARGO_MANIFEST_DIR"), "/docs")),
          )
          .launch();
        Ok(())
      }
    }
  }
}
