use crate::common::*;

pub(crate) struct Parser;

impl Parser {
  pub(crate) fn parse(path: &PathBuf) -> Result<String> {
    Ok(
      str::from_utf8(
        &Command::new("pandoc")
          .args([
            "--mathjax",
            "--quiet",
            "-t",
            "html",
            "--highlight-style",
            "monochrome",
            &format!("{}", path.display()),
          ])
          .output()?
          .stdout,
      )?
      .to_owned(),
    )
  }
}