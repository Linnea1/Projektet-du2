console.log("hej")
// G
// CODE According to specification
function click_filter_element (event) {

  const filter_dom = event.currentTarget;
  filter_dom.classList.toggle("selected");

  update_programmes ();
    /*
      ARGUMENTS
        event: event-object created when user clicks on one of the filter elements.
  
      SIDE-EFFECTS
        Marks the clicked filter element as selected / unselected.
        Since a filter element will have changed after the click, the list of
        programmes must be updated.

        //Anropa Update list of programmes
        //toggle selected class

  
        Attention VG
          Careful with the propagation of the click-event
  
          NO RETURN VALUE
    */
}
// G
// CODE according to specification
function create_filter_element (data) {
  
 
  const text = data.textContent;
  const parent = data.parent;
  const klass = data.class; 

  const new_element = document.createElement("li");
  new_element.classList.add(klass);
  parent.appendChild(new_element);
  new_element.textContent=text;
  new_element.addEventListener("click", click_filter_element);

  return new_element;
    /*
      ARGUMENTS
        data: object that contains the following keys:
          class (string): a class-name given to the created element
          textContent (string): the text that the element contains
          parent (reference to HTML-element): the HTML-element that is the parent of the created element
  
        No control of arguments.
  
      SIDE-EFFECTS
        Creates a new dom-element with the tag "li".
        Gives the new dom-element the class contained in data.class
        Appends the new dom-element to the element referenced in data.parent
        Sets the text content of the new dom-element to data.textContent
        Sets the function click_filter_element as a listener to "click" for the new dom-element
  
      RETURN VALUE
        Returns a reference to the new dom-element
    */
  
  }
  
  
  // VG
  // CODE according to specification
  function add_group_toggling (filter_container_dom) {
  
    /*
      ARGUMENT
        filter_container_dom: reference to a HTML-element that contains a set of fliter_elements
              Exempel: the <ul> that contains the filters for Language.
  
      SIDE EFFECTS
        The function makes sure that when the user clicks on filter_container_dom, all the
        filter_elements that it contains are selected / unselected.
        Since some filter elements will have changed after the click, the list of
        programmes must be updated.
  
      NO RETURN VALUE
  
    */
    
  }
  
  
  // VG
  // CODE according to specifications
  function toggle_cities (event) {
  
    /*
  
      ARGUMENTS
        This function does not take any arguments
  
      SIDE EFFECTS
        This function checks the state of the first city-filter-element (Madrid).
        If it is selected then it de-selects ALL city-filter-elements
        If it is de-selected then it selects ALL city-filter-elements 
  
      NO RETURN VALUE
  
    */
  
  }
  
  
  // WRITE SPECIFICATION
  // ATTENTION: You need to write the specification of all three functions:
  //            create_countries_cities_filters, create_country and create_city
  function create_countries_cities_filters () {
    function create_country (country) {
      const dom = document.createElement("div");
      dom.classList.add("country");
      dom.classList.add("filter_container");
      dom.id = "country_" + country.id;
      document.querySelector("#country_filter > ul").append(dom);
      
      dom.innerHTML = `
        <h1>${country.name}</h1>
        <ul class="filter_list"></ul>
      `;
      
      const cities = array_filter(CITIES, test_function);
      function test_function (city) {
        return city.countryID === country.id;
      }
  
      array_each(cities, create_city);
    }
    /*
      ARGUMENTS
        This function takes an object from the array COUNTRIES. The function uses following keys from the object:
        * Name
        * ID
  
        No control of arguments.
  
      SIDE-EFFECTS
        Creates a new element with the tag "div".
        Gives the new element a class as well as ID.
        Appends the new element to the element to a parent
        Sets the text content of the new element to country.name
        Filters and checks if the cities are connected to the right country
  
      RETURN VALUE
        For each filtered element, creates city.
    */
    function create_city (city) {
  
      const dom = create_filter_element({
        parent: document.querySelector(`#country_${city.countryID} > ul`),
        class: "selected",
        textContent: city.name,
      });
      dom.dataset.id = city.id;
    }
   /*
      ARGUMENTS
        This function takes an object from the array CITIES. The function uses following keys from the object:
        * Name
        * ID
  
        No control of arguments.
  
      SIDE-EFFECTS
        Calls the function create_filter_element.
        Gives the new element a parent, class, textContent as well as ID.

  
      RETURN VALUE
       None
    */
    array_each(COUNTRIES, create_country);
     /*
      Doesn't take any arguments.
      SIDE-EFFECTS
      This function has two functions within it's bracket.
      For each object in the array countries, it calls the function create_country;
  
      RETURN VALUE
        none
    */
  }
  // G
  // ABSTRACT AND WRITE SPECIFICATION
  //    As you can see, all three functions below do basically the same thing.
  //    Abstract them to one function, and write the specification of that function.

function create_filter(){
  const array_of_filter=["level", "subject","language"];

  function create_specific_filter(specificFilter){
  const dom=create_filter_element({
    parent: document.querySelector("#"+array_of_filter[number]+"_filter"+">ul"),
    class: "selected",
    textContent:specificFilter.name
  });
  dom.dataset.id=specificFilter.id;
  console.log(dom);
  }

  let number=0;
  array_each(LEVELS, create_specific_filter);
  number=1;
  array_each(SUBJECTS,create_specific_filter)
  number=2;
  array_each(LANGUAGES,create_specific_filter)
}


  /*
      ARGUMENTS
        This function has another function within it that takes a string from the array "array_of_filters".
  
        No control of arguments.
  
      SIDE-EFFECTS
        This function calls the function within it self three times, with a new array for each call. 
        Then thee function create_specific_filter sets a class, as well as a unique parent and textContent for each filter element. 
        Three types of filters is created by calling this function, levels, subjects and languages.
  
      RETURN VALUE
        No return value
    */
  
  // G / VG (see details in specification)
  // CODE according to specifications
  function create_programme (programme) {
    const grand_parent= document.querySelector("#programmes");
    const parent=grand_parent.children[1];
    const programme_name=programme.name;


    function searching_university(university){
      if(university.id===programme.universityID){
        return university.name;
      }
    }
    function searching_city(cities,cityId){
      for (let i = 0; i < cities.length; i++){
        if(cities[i].id===cityId){
          return cities[i];
        }
      }
    }
    function searching_level(level){
      if(level.id===programme.levelID){
        return level;
      }
    }
    function searching_subject(subject){
      if(subject.id===programme.subjectID){
        return subject;
      }
    }
    function searching_language(language){
      if(language.id===programme.languageID){
        return language;
      }
    }
    const new_programme = document.createElement("div");
    const programme_div=document.createElement("div");
    const programme_div2=document.createElement("div");
   
    programme_div.innerHTML = `
        <h1>${programme_name}</h1>
        <p>${array_find(UNIVERSITIES, searching_university).name}</p>
        <p>${searching_city(CITIES, array_find(UNIVERSITIES, searching_university).cityID).name}, ${searching_city(COUNTRIES,searching_city(CITIES, array_find(UNIVERSITIES, searching_university).cityID).countryID).name}</p>
        <p>${array_find(LEVELS, searching_level).name}, ${array_find(SUBJECTS, searching_subject).name}, ${array_find(LANGUAGES, searching_language).name}</p>
        <p class=.more_info>${array_find(UNIVERSITIES, searching_university).name}</p>
      `;
    new_programme.classList.add("programme");
    parent.appendChild(new_programme);
    new_programme.appendChild(programme_div);
    new_programme.appendChild(programme_div2);
    programme_div2.innerHTML = `
        <p>${searching_city(CITIES, array_find(UNIVERSITIES, searching_university).cityID).name}, sun-index: ${searching_city(CITIES, array_find(UNIVERSITIES, searching_university).cityID).sun} (83%)</p>
      `;
    programme_div2.classList.add("bottom_programme")
    /*
  
      ARGUMENT
        programme (object): One of the objects from PROGRAMMES
  
      SIDE-EFFECTS
        This function creates the HTML-element that contains all the information
        about one programme, as seen in the video / image.
        
        VG: The background image is a random image from among the images of the city
            in which the programme is (via the university)
        G:  No background image required.
  
  
        VG: The "see more" interaction must be included.
        G:  The "see more" element is not required. And that information needs not be in place.
  
      NO RETURN VALUE
  
    */  
  
  }
  

  
  // G
  // CODE according to the specification
  function update_programmes () {

    /*
        NO ARGUMENTS
  
        SIDE EFFECTS
          This function updates the programmes shown on the page according to
          the current filter status (which filter elements are selected / unselected).
          It uses the function read_filters to know which programmes need to be included.
  
          VG: The top images (header) need to be updated here
  
        NO RETURN VALUE
  
    */
  
  }
  
  

  
  
  // G
  // WRITE SPECIFICATION
  // You must understand how this function works. There will be questions about it
  // in the code review (kodredovisning)
  
  // Optional VG: Which parts of the function's code could be abstracted?
  //              Implement it
  function read_filters () {
    
    const city_selected_dom = document.querySelectorAll("#country_filter li.selected");
  
    const city_id_selected = [];
    function callback_add_cityID (dom_element) {
      const id_as_integer = parseInt(dom_element.dataset.id);
      city_id_selected.push(id_as_integer);
      console.log(id_as_integer);
    }
    array_each(city_selected_dom, callback_add_cityID);


    
    const universities = [];
    for (let i = 0; i < city_id_selected.length; i++) {
      const city_id = city_id_selected[i];
      for (let ii = 0; ii < UNIVERSITIES.length; ii++) {
        const university = UNIVERSITIES[ii];
        if (university.cityID === city_id) {
          universities.push(university);
        }
      }
    }
  
    let programmes = [];
    function callback_add_programmes (university) {
      const university_id = university.id;
      for (let i = 0; i < PROGRAMMES.length; i++) {
        const programme = PROGRAMMES[i];
        if (programme.universityID === university_id) {
          programmes.push(programme);
        }
      }
    }
   
    array_each(universities, callback_add_programmes);
  
  
    const level_selected_dom = document.querySelectorAll("#level_filter li.selected");
    const level_id_selected = [];
    function callback_add_levelID (dom_element) {
      const id_as_integer = parseInt(dom_element.dataset.id);
      level_id_selected.push(id_as_integer);
    }
    array_each(level_selected_dom, callback_add_levelID);

    
    function test_function_level (programme) {
      return level_id_selected.includes(programme.levelID);
    }
    programmes = array_filter(programmes, test_function_level);
  
    
  
    const language_selected_dom = document.querySelectorAll("#language_filter li.selected");
    const language_id_selected = [];
    function callback_add_languageID (dom_element) {
      const id_as_integer = parseInt(dom_element.dataset.id);
      language_id_selected.push(id_as_integer);
    }
    array_each(language_selected_dom, callback_add_languageID);
  

  
    function test_function_language (programme) {
      return language_id_selected.includes(programme.languageID);
    }
    programmes = array_filter(programmes, test_function_language);
  
  
  
    const subject_selected_dom = document.querySelectorAll("#subject_filter li.selected");
    const subject_id_selected = [];
    function callback_add_subjectID (dom_element) {
      const id_as_integer = parseInt(dom_element.dataset.id);
      subject_id_selected.push(id_as_integer);
    }
    array_each(subject_selected_dom, callback_add_subjectID);
  

  
  
    function test_function_subject (programme) {
      return subject_id_selected.includes(programme.subjectID);
    }
    programmes = array_filter(programmes, test_function_subject);
  

  
    const search_string = document.querySelector("#search_field input").value;
    if (search_string !== "") {
      function test_function (programme) {
        return programme.name.includes(search_string);
      }
      programmes = array_filter(programmes, test_function);
    }
  
   
    return programmes;
  }
 