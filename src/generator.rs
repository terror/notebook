use crate::common::*;

#[derive(Debug)]
pub(crate) struct Generator;

impl Generator {
  pub(crate) fn run(posts: Vec<Post>) -> Result {
    let mut env = Environment::new();

    let index_template_content =
      fs::read_to_string(format!("{}/index.html", TEMPLATES_PATH))?;
    env.add_template("index", &index_template_content)?;

    let post_template_content =
      fs::read_to_string(format!("{}/post.html", TEMPLATES_PATH))?;
    env.add_template("post", &post_template_content)?;

    fs::write(
      format!("{}/index.html", DOCS_PATH),
      env
        .get_template("index")?
        .render(context! { posts => posts })?,
    )?;

    let post_template = env.get_template("post")?;

    posts.iter().try_for_each(|post| -> Result {
      Ok(fs::write(
        format!("{}/{}", DOCS_PATH, post.title),
        post_template.render(context! { post => post })?,
      )?)
    })?;

    Ok(())
  }
}
