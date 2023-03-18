use super::*;

#[derive(Debug, StructOpt)]
pub(crate) enum Arguments {
  #[clap(alias = "g", override_help = "Generate static assets")]
  Generate(Generator),
  #[clap(alias = "s", override_help = "Serve static assets locally")]
  Serve(Server),
}

impl Arguments {
  pub(crate) async fn run(self) -> Result {
    use Arguments::*;

    match self {
      Generate(generator) => {
        generator.run(Loader::new(PathBuf::from(CONTENT_PATH)).load()?)
      }
      Serve(server) => server.run().await,
    }
  }
}
