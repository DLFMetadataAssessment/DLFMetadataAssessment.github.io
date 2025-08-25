---
---

{% assign sorted_tools = site.tools | sort: "tool_title" %}
const allTools = [{% for t in sorted_tools %}
  {
    "title": "{{ t.tool_title }}",
    "abstract": "{{ t.abstract }}",
    "url": "{{ t.tool_url }}",
    "source_code": "{{ t.source_code }}",
    "creator": "{{ t.creator }}",
    "type": "{{ t.type }}",
    "category_broad": [{% for category in t.category_broad %}"{{ category }}"{% unless forloop.last %}, {% endunless %}{% endfor %}],
    "category_broad_informal": [{% for category in t.category_broad_informal %}"{{ category }}"{% unless forloop.last %}, {% endunless %}{% endfor %}],
    "use_case": "{{ t.use_case }}",
    "interface": "{{ t.interface }}",
    "dependencies": "{{ t.dependencies }}",
    "open_source_proprietary": "{{ t.open_source_proprietary }}",
    "cost": "{{ t.cost }}",
    "related_tools": "{{ t.related_tools }}",
    "metadata_standard": "{{ t.metadata_standard }}",
    "file_format": "{{ t.file_format }}",
    "resources": "{{ t.resources }}",
    "record_url": "{{ t.url | relative_url }}"
  }{% unless forloop.last %},{% endunless %}{% endfor %}
];

var search, results = [];

var filterCategoriesSelect = document.getElementById("toolCategories");

var rebuildAndRerunSearch = function() {
  rebuildSearchIndex();
  searchTools();
};

filterCategoriesSelect.onchange = rebuildAndRerunSearch;

var rebuildSearchIndex = function() {
  search = new JsSearch.Search('title');
  search.indexStrategy = new JsSearch.AllSubstringsIndexStrategy();
  search.sanitizer = new JsSearch.LowerCaseSanitizer();
  search.searchIndex = new JsSearch.UnorderedSearchIndex();
  search.addIndex('abstract');
  search.addIndex('type');
  search.addIndex('category_broad');
  search.addIndex('category_broad_informal');
  search.addIndex('use_case');
  search.addIndex('interface');
  search.addIndex('open_source_proprietary');
  search.addIndex('cost');
  search.addIndex('metadata_standard');
  search.addIndex('file_format');
  search.addDocuments(filterCategoriesSelect.value != "" ? allTools.filter(t => t.category_broad.includes(filterCategoriesSelect.value)) : allTools);
};

var indexedToolsTable = document.getElementById('indexedToolsTable');
var indexedToolsTBody = indexedToolsTable.tBodies[0];
var searchInput = document.getElementById('searchInput');

var updateToolsTable = function(Tools) {
  indexedToolsTBody.innerHTML = '';

  var tokens = search.tokenizer.tokenize(searchInput.value);

  for (var i = 0; i < Tools.length; i++) {
    var Tool = Tools[i];

    var recordLink = document.createElement('a');
    recordLink.href = Tool.record_url;
    recordLink.innerHTML = Tool.title;
    var titleColumn = document.createElement('td');
    titleColumn.appendChild(recordLink);

    var abstractColumn = document.createElement('td');
    abstractColumn.innerHTML = Tool.abstract.split(" ").length > 23 ? Tool.abstract.split(" ").slice(0, 23).join(" ") + " …" : Tool.abstract;

    var categoryColumn = document.createElement('td');
    categoryColumn.innerHTML = Tool.category_broad.join("; ");

    var metadataStandardColumn = document.createElement('td');
    metadataStandardColumn.innerHTML = Tool.metadata_standard;

    var tableRow = document.createElement('tr');
    tableRow.appendChild(titleColumn);
    tableRow.appendChild(abstractColumn);
    tableRow.appendChild(categoryColumn);
    tableRow.appendChild(metadataStandardColumn);

    indexedToolsTBody.appendChild(tableRow);
  }
};

var update = function() {
  if (results.length > 0) {
    updateToolsTable(results);
  } else if (!!searchInput.value) {
    updateToolsTable([]);
  } else {
    updateToolsTable(filterCategoriesSelect.value != "" ? allTools.filter(t => t.category_broad.includes(filterCategoriesSelect.value)) : allTools);
  }
};

var searchTools = function() {
  results = search.search(searchInput.value);
  update();
};

searchInput.oninput = searchTools;

// init
rebuildSearchIndex();
updateToolsTable(allTools);
