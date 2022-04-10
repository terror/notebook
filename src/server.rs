use crate::common::*;

#[derive(Debug, StructOpt)]
pub(crate) struct Server {
  #[clap(flatten)]
  options: ServerOptions,
}

#[derive(Debug, StructOpt)]
pub(crate) struct ServerOptions {
  #[clap(long)]
  port: Option<u16>,
  #[clap(long)]
  path: PathBuf,
}

impl Server {
  pub(crate) fn run(&self) -> Result {
    let config = Config::build(ServerEnvironment::Staging)
      .address("127.0.0.1")
      .port(self.options.port.unwrap_or(8000))
      .finalize()?;

    rocket::custom(config)
      .mount(
        "/",
        StaticFiles::from(
          PathBuf::from(env!("CARGO_MANIFEST_DIR")).join(&self.options.path),
        ),
      )
      .launch();

    Ok(())
  }
}
