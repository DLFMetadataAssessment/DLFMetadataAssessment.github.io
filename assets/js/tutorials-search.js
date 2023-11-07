---
---

const allTutorials = [{% for t in site.tutorials %}
  {
    "title": "{{ t.title }}",
    "url": "{{ t.tutorial_url }}",
    "type": "{{ t.type }}",
    "level": "{{ t.level }}",
    "skill_taught": "{{ t.skill_taught }}",
    "prerequisite": "{{ t.prerequisite }}",
    "creator": "{{ t.creator }}",
    "date": "{{ t.date_created_updated }}",
    "description": "{{ t.description }}",
    "record_url": "{{ t.url | relative_url }}"
  }{% unless forloop.last %},{% endunless %}{% endfor %}
];

var search, results = [];

var filterTypesSelect = document.getElementById("tutorialTypes");

var rebuildAndRerunSearch = function() {
  rebuildSearchIndex();
  searchTutorials();
};

filterTypesSelect.onchange = rebuildAndRerunSearch;

var rebuildSearchIndex = function() {
  search = new JsSearch.Search('title');
  search.indexStrategy = new JsSearch.AllSubstringsIndexStrategy();
  search.sanitizer = new JsSearch.LowerCaseSanitizer();
  search.searchIndex = new JsSearch.UnorderedSearchIndex();
  search.addIndex('type');
  search.addIndex('level');
  search.addIndex('skill_taught');
  search.addIndex('prerequisite');
  search.addIndex('creator');
  search.addIndex('date_created_updated');
  search.addIndex('description');
  search.addDocuments(filterTypesSelect.value != "" ? allTutorials.filter(t => t.type.includes(filterTypesSelect.value)) : allTutorials);
};

var indexedTutorialsTable = document.getElementById('indexedTutorialsTable');
var indexedTutorialsTBody = indexedTutorialsTable.tBodies[0];
var searchInput = document.getElementById('searchInput');

var updateTutorialsTable = function(Tutorials) {
  indexedTutorialsTBody.innerHTML = '';

  var tokens = search.tokenizer.tokenize(searchInput.value);

  for (var i = 0; i < Tutorials.length; i++) {
    var Tutorial = Tutorials[i];

    var recordLink = document.createElement('a');
    recordLink.href = Tutorial.record_url;
    recordLink.innerHTML = Tutorial.title;
    var titleColumn = document.createElement('td');
    titleColumn.appendChild(recordLink);

    var typeColumn = document.createElement('td');
    typeColumn.innerHTML = Tutorial.type;

    var levelColumn = document.createElement('td');
    levelColumn.innerHTML = Tutorial.level;

    var skillTaughtColumn = document.createElement('td');
    skillTaughtColumn.innerHTML = Tutorial.skill_taught;

    var tableRow = document.createElement('tr');
    tableRow.appendChild(titleColumn);
    tableRow.appendChild(typeColumn);
    tableRow.appendChild(levelColumn);
    tableRow.appendChild(skillTaughtColumn);

    indexedTutorialsTBody.appendChild(tableRow);
  }
};

var update = function() {
  if (results.length > 0) {
    updateTutorialsTable(results);
  } else if (!!searchInput.value) {
    updateTutorialsTable([]);
  } else {
    updateTutorialsTable(filterTypesSelect.value != "" ? allTutorials.filter(t => t.type.includes(filterTypesSelect.value)) : allTutorials);
  }
};

var searchTutorials = function() {
  results = search.search(searchInput.value);
  update();
};

searchInput.oninput = searchTutorials;

// init
rebuildSearchIndex();
updateTutorialsTable(allTutorials);
