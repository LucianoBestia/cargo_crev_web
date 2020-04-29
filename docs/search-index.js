var searchIndex={};
searchIndex["cargo_crev_web"] = {"doc":"cargo_crev_web","i":[[5,"main","cargo_crev_web","main function of the binary",null,[[]]],[0,"crev_query_mod","","",null,null],[3,"ProofFrom","cargo_crev_web::crev_query_mod","",null,null],[12,"id_type","","",0,null],[12,"id","","",0,null],[12,"url","","",0,null],[3,"ProofPackage","","",null,null],[12,"source","","",1,null],[12,"name","","",1,null],[12,"version","","",1,null],[12,"digest","","",1,null],[12,"version_for_sorting","","",1,null],[3,"ProofReview","","",null,null],[12,"thoroughness","","",2,null],[12,"understanding","","",2,null],[12,"rating","","",2,null],[3,"Issue","","",null,null],[12,"id","","",3,null],[12,"severity","","",3,null],[12,"comment","","",3,null],[3,"Alternative","","",null,null],[12,"source","","",4,null],[12,"name","","",4,null],[3,"Advisory","","",null,null],[12,"affected","","",5,null],[12,"critical","","",5,null],[3,"Proof","","",null,null],[12,"kind","","",6,null],[12,"version","","",6,null],[12,"date","","",6,null],[12,"from","","",6,null],[12,"package","","",6,null],[12,"review","","",6,null],[12,"alternatives","","",6,null],[12,"issues","","",6,null],[12,"advisory","","",6,null],[12,"comment","","",6,null],[5,"crev_query","","crev query returns html",null,[[["string"]],["string"]]],[5,"push_review_to_html","","",null,[[["proof"],["string"]]]],[5,"parse_semver","","parse semver ex. 12.99.88alpha",null,[[["str"]]]],[5,"parse_next_number","","parse next characters until is numeric or end",null,[[["str"],["usize"]]]],[5,"traverse_dir_with_exclude_dir","","traverse dir (sub-dir) with exclude dir the find_file and…",null,[[["path"],["str"],["vec"]],[["result",["vec"]],["vec",["string"]]]]],[5,"push_proof","","",null,[[["str"],["vec"]]]],[11,"from","","",0,[[["t"]],["t"]]],[11,"into","","",0,[[],["u"]]],[11,"to_owned","","",0,[[["self"]],["t"]]],[11,"clone_into","","",0,[[["self"],["t"]]]],[11,"try_from","","",0,[[["u"]],["result"]]],[11,"try_into","","",0,[[],["result"]]],[11,"borrow","","",0,[[["self"]],["t"]]],[11,"borrow_mut","","",0,[[["self"]],["t"]]],[11,"type_id","","",0,[[["self"]],["typeid"]]],[11,"vzip","","",0,[[],["v"]]],[11,"from","","",1,[[["t"]],["t"]]],[11,"into","","",1,[[],["u"]]],[11,"to_owned","","",1,[[["self"]],["t"]]],[11,"clone_into","","",1,[[["self"],["t"]]]],[11,"try_from","","",1,[[["u"]],["result"]]],[11,"try_into","","",1,[[],["result"]]],[11,"borrow","","",1,[[["self"]],["t"]]],[11,"borrow_mut","","",1,[[["self"]],["t"]]],[11,"type_id","","",1,[[["self"]],["typeid"]]],[11,"vzip","","",1,[[],["v"]]],[11,"from","","",2,[[["t"]],["t"]]],[11,"into","","",2,[[],["u"]]],[11,"to_owned","","",2,[[["self"]],["t"]]],[11,"clone_into","","",2,[[["self"],["t"]]]],[11,"try_from","","",2,[[["u"]],["result"]]],[11,"try_into","","",2,[[],["result"]]],[11,"borrow","","",2,[[["self"]],["t"]]],[11,"borrow_mut","","",2,[[["self"]],["t"]]],[11,"type_id","","",2,[[["self"]],["typeid"]]],[11,"vzip","","",2,[[],["v"]]],[11,"from","","",3,[[["t"]],["t"]]],[11,"into","","",3,[[],["u"]]],[11,"to_owned","","",3,[[["self"]],["t"]]],[11,"clone_into","","",3,[[["self"],["t"]]]],[11,"try_from","","",3,[[["u"]],["result"]]],[11,"try_into","","",3,[[],["result"]]],[11,"borrow","","",3,[[["self"]],["t"]]],[11,"borrow_mut","","",3,[[["self"]],["t"]]],[11,"type_id","","",3,[[["self"]],["typeid"]]],[11,"vzip","","",3,[[],["v"]]],[11,"from","","",4,[[["t"]],["t"]]],[11,"into","","",4,[[],["u"]]],[11,"to_owned","","",4,[[["self"]],["t"]]],[11,"clone_into","","",4,[[["self"],["t"]]]],[11,"try_from","","",4,[[["u"]],["result"]]],[11,"try_into","","",4,[[],["result"]]],[11,"borrow","","",4,[[["self"]],["t"]]],[11,"borrow_mut","","",4,[[["self"]],["t"]]],[11,"type_id","","",4,[[["self"]],["typeid"]]],[11,"vzip","","",4,[[],["v"]]],[11,"from","","",5,[[["t"]],["t"]]],[11,"into","","",5,[[],["u"]]],[11,"to_owned","","",5,[[["self"]],["t"]]],[11,"clone_into","","",5,[[["self"],["t"]]]],[11,"try_from","","",5,[[["u"]],["result"]]],[11,"try_into","","",5,[[],["result"]]],[11,"borrow","","",5,[[["self"]],["t"]]],[11,"borrow_mut","","",5,[[["self"]],["t"]]],[11,"type_id","","",5,[[["self"]],["typeid"]]],[11,"vzip","","",5,[[],["v"]]],[11,"from","","",6,[[["t"]],["t"]]],[11,"into","","",6,[[],["u"]]],[11,"to_owned","","",6,[[["self"]],["t"]]],[11,"clone_into","","",6,[[["self"],["t"]]]],[11,"try_from","","",6,[[["u"]],["result"]]],[11,"try_into","","",6,[[],["result"]]],[11,"borrow","","",6,[[["self"]],["t"]]],[11,"borrow_mut","","",6,[[["self"]],["t"]]],[11,"type_id","","",6,[[["self"]],["typeid"]]],[11,"vzip","","",6,[[],["v"]]],[11,"clone","","",0,[[["self"]],["prooffrom"]]],[11,"clone","","",1,[[["self"]],["proofpackage"]]],[11,"clone","","",2,[[["self"]],["proofreview"]]],[11,"clone","","",3,[[["self"]],["issue"]]],[11,"clone","","",4,[[["self"]],["alternative"]]],[11,"clone","","",5,[[["self"]],["advisory"]]],[11,"clone","","",6,[[["self"]],["proof"]]],[11,"serialize","","",0,[[["self"],["__s"]],["result"]]],[11,"serialize","","",1,[[["self"],["__s"]],["result"]]],[11,"serialize","","",2,[[["self"],["__s"]],["result"]]],[11,"serialize","","",3,[[["self"],["__s"]],["result"]]],[11,"serialize","","",4,[[["self"],["__s"]],["result"]]],[11,"serialize","","",5,[[["self"],["__s"]],["result"]]],[11,"serialize","","",6,[[["self"],["__s"]],["result"]]],[11,"deserialize","","",0,[[["__d"]],["result"]]],[11,"deserialize","","",1,[[["__d"]],["result"]]],[11,"deserialize","","",2,[[["__d"]],["result"]]],[11,"deserialize","","",3,[[["__d"]],["result"]]],[11,"deserialize","","",4,[[["__d"]],["result"]]],[11,"deserialize","","",5,[[["__d"]],["result"]]],[11,"deserialize","","",6,[[["__d"]],["result"]]]],"p":[[3,"ProofFrom"],[3,"ProofPackage"],[3,"ProofReview"],[3,"Issue"],[3,"Alternative"],[3,"Advisory"],[3,"Proof"]]};
addSearchOptions(searchIndex);initSearch(searchIndex);