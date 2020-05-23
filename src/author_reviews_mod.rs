//! author_reviews_mod

use crate::review_mod::*;
//use crate::review_index_mod::*;
use crate::data_file_scan_mod::*;
use crate::*;

use unwrap::unwrap;

//use unwrap::unwrap;
pub struct AuthorReviews {
    pub author: String,
    pub author_url: String,
    pub author_id: String,
    pub reviews: Vec<Review>,
}

impl AuthorReviews {
    pub fn new(cached_review_index: CachedReviewIndex, author_id: &str) -> Self {
        let ns_start = ns_start("");
        let review_index = cached_review_index
            .lock()
            .expect("error cached_review_index.lock()");
        // sort data by file_path
        // the data is sorted by path_file in ReviewIndex.new()
        // nobody else should sort the data
        // search data in the index
        let mut many_file = ManyFileReviewsPk { vec: vec![] };
        let mut old_file_path = s!("");
        let mut one_file = OneFileReviewsPk {
            file_path: s!("don't push the first row"),
            reviews_pk: vec![],
        };
        let mut author = s!("");
        let mut author_url = s!("");
        for index_item in review_index.vec.iter() {
            if index_item.author_id == author_id {
                if index_item.file_path != old_file_path {
                    old_file_path = index_item.file_path.clone();
                    if &one_file.file_path == "don't push the first row" {
                        //only once read the author
                        author = index_item.author.clone();
                        author_url = index_item.author_url.clone();
                    } else {
                        // push the old one before creating the new one
                        many_file.vec.push(one_file);
                    }
                    // create new OneFile
                    one_file = OneFileReviewsPk {
                        file_path: index_item.file_path.clone(),
                        reviews_pk: vec![],
                    };
                }
                // add data to reviews_pk
                one_file.reviews_pk.push(ReviewPk {
                    crate_name: index_item.crate_name.clone(),
                    author_id: index_item.author_id.clone(),
                    version: index_item.version.clone(),
                });
            }
        }
        // save the last file in the loop
        if &one_file.file_path != "don't push the first row" {
            // push the old one before creating the new one
            many_file.vec.push(one_file.clone());
        }
        let ns_read_from_index = ns_print(
            &format!("read from index, file_path count: {}", many_file.vec.len()),
            ns_start,
        );
        let mut reviews = get_vec_of_review(many_file);
        ns_print(
            &format!("read from files reviews.len(): {}", reviews.len()),
            ns_read_from_index,
        );
        // sort reviews by crate and version
        reviews.sort_by(|a, b| {
            b.package
                .version_for_sorting
                .cmp(&a.package.version_for_sorting)
        });
        reviews.sort_by(|a, b| a.package.name.cmp(&b.package.name));
        //return
        AuthorReviews {
            author: author,
            author_url: author_url,
            author_id: s!(author_id),
            reviews,
        }
    }
}

impl HtmlServerTemplateRender for AuthorReviews {
    /// data model name is used for eprint
    fn data_model_name(&self) -> String {
        //return
        s!("AuthorReviews")
    }
    /// renders the complete html file. Not a sub-template/fragment.
    fn render_html_file(&self, templates_folder_name: &str) -> String {
        let template_file_name = format!(
            "{}author/author_reviews_template.html",
            templates_folder_name
        );
        let html = self.render_from_file(&template_file_name);
        // return
        html
    }
    /// boolean : is the next node rendered or not
    fn retain_next_node(&self, placeholder: &str) -> bool {
        // eprintln!("{}",&format!("retain_next_node: {}", &placeholder));
        match placeholder {
            _ => retain_next_node_match_else(&self.data_model_name(), placeholder),
        }
    }

    /// returns a String to replace the next text-node
    #[allow(
        clippy::needless_return,
        clippy::integer_arithmetic,
        clippy::indexing_slicing
    )]
    fn replace_with_string(&self, placeholder: &str, _cursor_pos: usize) -> String {
        // eprintln!("{}",&format!("replace_with_string: {}", &placeholder));
        match placeholder {
            // the href for css is good for static data. For dynamic route it must be different.
            "st_css_route" => s!("/cargo_crev_web/css/cargo_crev_web.css"),
            "st_favicon_route" => s!("/cargo_crev_web/favicon.png"),
            "st_author" => s!(&self.author),
            "st_author_url" => s!(&self.author_url),
            _ => replace_with_string_match_else(&self.data_model_name(), placeholder),
        }
    }
    /// returns a vector of Nodes to replace the next Node
    #[allow(clippy::needless_return)]
    fn replace_with_nodes(&self, placeholder: &str) -> Vec<Node> {
        // eprintln!("{}",&format!("replace_with_nodes: {}", &placeholder));
        match placeholder {
            _ => replace_with_nodes_match_else(&self.data_model_name(), placeholder),
        }
    }
    /// renders sub-template
    #[allow(clippy::needless_return)]
    fn render_sub_template(
        &self,
        template_name: &str,
        sub_templates: &Vec<SubTemplate>,
    ) -> Vec<Node> {
        // eprintln!("{}",&format!("render_sub_template: {}", &placeholder));
        match template_name {
            "stmplt_reviews" => {
                // eprintln!("stmplt_reviews: {}", "");
                let sub_template = unwrap!(sub_templates
                    .iter()
                    .find(|&template| template.name == template_name));
                let mut nodes = vec![];
                // sub-template repeatable
                for review in &self.reviews {
                    let vec_node = unwrap!(review.render_template_raw_to_nodes(
                        &sub_template.template,
                        HtmlOrSvg::Html,
                        0
                    ));
                    nodes.extend_from_slice(&vec_node);
                }
                // return
                nodes
            }
            _ => render_sub_template_match_else(&self.data_model_name(), template_name),
        }
    }
}
