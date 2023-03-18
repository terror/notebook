use super::*;

pub(crate) fn parse(path: &Path) -> Result<String> {
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
