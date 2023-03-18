use super::*;

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
  pub(crate) async fn run(&self) -> Result {
    Ok(
      axum::Server::bind(&SocketAddr::from((
        [127, 0, 0, 1],
        self.options.port.unwrap_or(8000),
      )))
      .serve(
        Router::new()
          .fallback(
            get_service(ServeDir::new(self.options.path.clone())).handle_error(
              |err| async move {
                (
                  StatusCode::INTERNAL_SERVER_ERROR,
                  format!("I/O error: {}", err),
                )
              },
            ),
          )
          .layer(SetResponseHeaderLayer::overriding(
            header::CACHE_CONTROL,
            HeaderValue::from_static("no-store"),
          ))
          .layer(TraceLayer::new_for_http())
          .into_make_service(),
      )
      .await?,
    )
  }
}
