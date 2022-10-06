---
---

const allMAPs = [{% for m in site.metadata_application_profiles %}
  {
    "document_filename": "{{ m.document_filename }}",
    "title": "{{ m.title }}",
    "digital_repository": "{{ m.digital_repository }}",
    "digital_repository_description": "{{ m.digital_repository_description }}",
    "digital_repository_url": "{{ m.digital_repository_url }}",
    "document_type": "{{ m.document_type }}",
    "document_description": "{{ m.document_description }}",
    "document_version": "{{ m.document_version }}",
    "document_year": "{{ m.document_year }}",
    "document_language": "{{ m.document_language }}",
    "document_filetype": "{{ m.document_filetype }}",
    "record_url": "{{ m.url | relative_url }}"
  }{% unless forloop.last %},{% endunless %}{% endfor %}
];

var search, results = [];

var rebuildSearchIndex = function() {
  search = new JsSearch.Search('document_filename');
  search.indexStrategy = new JsSearch.AllSubstringsIndexStrategy();
  search.sanitizer = new JsSearch.LowerCaseSanitizer();
  search.searchIndex = new JsSearch.UnorderedSearchIndex();
  search.addIndex('title');
  search.addIndex('digital_repository');
  search.addIndex('digital_repository_description');
  search.addIndex('digital_repository_url');
  search.addIndex('document_type');
  search.addIndex('document_description');
  search.addIndex('document_version');
  search.addIndex('document_year');
  search.addIndex('document_filetype');
  search.addDocuments(allMAPs);
};

var indexedMAPsTable = document.getElementById('indexedMAPsTable');
var indexedMAPsTBody = indexedMAPsTable.tBodies[0];
var searchInput = document.getElementById('searchInput');

var updateMAPsTable = function(MAPs) {
  indexedMAPsTBody.innerHTML = '';

  var tokens = search.tokenizer.tokenize(searchInput.value);

  for (var i = 0; i < MAPs.length; i++) {
    var MAP = MAPs[i];

    var recordLink = document.createElement('a');
    recordLink.href = MAP.record_url;
    recordLink.innerHTML = MAP.title;
    var titleColumn = document.createElement('td');
    titleColumn.appendChild(recordLink);

    var digitalRepositoryColumn = document.createElement('td');
    digitalRepositoryColumn.innerHTML = MAP.digital_repository;

    var typeColumn = document.createElement('td');
    typeColumn.innerHTML = MAP.document_type;

    var descriptionColumn = document.createElement('td');
    descriptionColumn.innerHTML = MAP.document_description;

    var yearColumn = document.createElement('td');
    yearColumn.innerHTML = MAP.document_year;

    var tableRow = document.createElement('tr');
    tableRow.appendChild(titleColumn);
    tableRow.appendChild(digitalRepositoryColumn);
    tableRow.appendChild(typeColumn);
    tableRow.appendChild(descriptionColumn);
    tableRow.appendChild(yearColumn);

    indexedMAPsTBody.appendChild(tableRow);
  }
};

var update = function() {
  if (results.length > 0) {
    updateMAPsTable(results);
  } else if (!!searchInput.value) {
    updateMAPsTable([]);
  } else {
    updateMAPsTable(allMAPs);
  }
};

var searchMAPs = function() {
  results = search.search(searchInput.value);
  update();
};

searchInput.oninput = searchMAPs;

// init
rebuildSearchIndex();
updateMAPsTable(allMAPs);
