/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

+( function() {
  
  let scrollpos = window.pageYOffset
  const knowledge = document.querySelector("#knowledge h2")
  const languages = document.querySelectorAll(".grid__language-list--element")
  const knowledge_height = knowledge.offsetTop
  console.log(knowledge_height);
  const add_class_on_scroll = () => languages.forEach(function(el) { el.classList.add("fill") })
  const remove_class_on_scroll = () => languages.forEach(function(el) { el.classList.remove("fill") })

  window.addEventListener('scroll', function() { 
    scrollpos = window.scrollY;

    if (scrollpos >= knowledge_height - 200) { add_class_on_scroll() }
    else { remove_class_on_scroll() }
 
  })

} )();
