---
sectionclass: h2
sectionid: review-tools
parent-id: review
is-parent: yes
number: 34
title: Tools
---
[Draft and Notes for this Section](https://docs.google.com/document/d/1rk6TThrSqpLNk-L0JgR3lk5b_M3M8n5xM2xggKHYVUw/edit#heading=h.nte3qkd91px7)

<h3>Summary</h3>

Being written.

<h4>How to Read Our Environmental Scan for Tools Document</h4>

***Work in Progress**

Tools selected as part of the environmental scan are described in [this spreadsheet](https://docs.google.com/spreadsheets/d/1PCi_3pcWSFQ9fR54AxwO7LWuBUu2vbVw1etvw_UAl5g/edit?usp=sharing). Below are definitions of the column headers used to arrange details about each of these tools.

<h5>Tools Overview Tab</h5>
| Columns        | Definitions           | Values  |
| ------------- |:-------------:| -----:|
| Lit Review ID     | |  |
| Assessment Grouping      |      |    |
| Tool Name |       |     |
| Designed For |       |     |
| Type |      |     |
| URL |       |     |
| Abstract |       |     |
| Other |       |     |
| Tool Creator/Maintainer |      |     |
| Tool Organization Association |       |     |



<h3>GUI Tools for Assessing Metadata</h3>

<h4>NCDHC DPLA Aggregation tools</h4>
- [North Carolina Digital Heritage Center (NCDHC) DPLA Aggregation Tools link](https://github.com/ncdhc/dpla-aggregation-tools)

This set of tools provides a way of visually browsing metadata from OAI-PMH feeds, with the option to check for values in required fields. Data is displayed in grids, allowing a user to more effectively assess an entire set/collection. Can be particularly useful for people who would like to assess the metadata available over OAI-PMH but who are not comfortable reviewing XML. While the tools are set to review simple dublin core and a set of required fields that applies to NCDHC, this can be modified by changing the code to review a qualified dublin core OAI-PMH feed, and the setting for required fields can also be adjusted. At the University of Utah, we are using these tools (modified by the Mountain West Digital Library) to assess mappings and required field values for legacy collections.

<h4>OpenRefine</h4>
- [OpenRefine link](http://openrefine.org/)
- [Source Code link](https://github.com/OpenRefine/OpenRefine)

OpenRefine is a free, open source data normalization and reconciliation tool that runs locally in a web browser. Can work with large sets of data, but does best processing <100k lines at a time. Users can utilize faceted search and browsing to identify similar data, or rely on the built-in, super-charged algorithms that suggest ‘clusters’ of data that OpenRefine thinks can be normalized to a single value (including suggesting the ‘best’ value based on relevancies defined in the algorithm). Very useful for assessing and migrating legacy metadata from different systems, and plays well with lots of standard data storage formats (CSV and other delimited files, RDF, XML, JSON, etc). Advanced users can explore OpenRefine as a tool for linking existing data to external sources (eg FreeBase) or normalizing data using programming languages for complex queries. Relatively short learning curve for ‘basic’ level of usage - common actions have built in buttons, pretty intuitive navigation and design, and import/export is very simple.

Openrefine.org provides easy-to-understand video tutorials, in addition to text-based documentation. They also have a documentation wiki [here](https://github.com/OpenRefine/OpenRefine/wiki/Documentation-For-Users)

<h4>LODrefine</h4>
- [LODRefine link](https://github.com/sparkica/LODRefine )

LOD-enabled version of OpenRefine. No longer actively supported/maintained.

<h3>GUI Tools for Statistical Computing</h3>

<h4>SPSS</h4>
- [SPSS link](http://www-01.ibm.com/software/analytics/spss/)

SPSS is a statistical analysis tool widely used in the social sciences, commercially available from IBM. It can be useful for identifying meaningful relationships between variables.

<h3>Scripts for Assessing Metadata</h3>

<h4>Metadata Breakers</h4>
- [Metadata Breakers](https://github.com/vphill/metadata_breakers)

These Python 2 scripts by Mark Phillips allows you to parse digital library metadata exposed in an OAI-PMH repository.

<h4>Completeness rating in Europeana</h4>
- [Completeness rating in Europeana link](https://docs.google.com/document/d/1Henbc0lQ3gerNoWUd5DcPnNq4YxOxDW5SQ7g4f26Py0/edit#heading=h.l2fg46yn5tej)

This Java program assigns point-based values to “score” individual metadata records for completeness and assumed “information value” [attractiveness?] to humans. The score is used to increase the visibility of best record in the Europeana portal by boosting their  ranking. Logic for points awarded to a record is laid out in supporting documentation.

Notes from Borys Omelayenko (in-line comment via Github): “It gives rank from 0 to 10 for a record, that consists of two parts: up to 5 points for tags with values (potentially) coming from controlled vocabularies, and up to 5 points for free-text fields.” (line 27-52)

<h3>Other Programming Resources</h3>

<h4>R</h4>
Summary being written.

<h4>R Studio</h4>
Free and open-source integrated development environment (IDE) for R, a programming language for statistical computing and graphics﻿.

<h4>D3</h4>
Tool for data visualization. D3 is a JavaScript library for visualizing data with HTML, SVG, and CSS.

<h4>Plot.ly</h4>
An online analytics and data visualization tool﻿

<h4>Anaconda distribution of Python</h4>
Python is a programming language, and the Anaconda distribution of Python comes bundled with additional things useful for metadata assessment, including: scientific & data analysis libraries, including scikitlearn, pandas, numpy, scipy, nltk, and many more.

<h4>Python pandas</h4>
Python library for analyzing data. See “Anaconda distribution of Python” above

<h3>Data Infrastructure Tools</h3>

<h4>Apache Spark</h4>
[Apache Spark Link](http://spark.apache.org/)

A fast and general engine for big data processing, with built-in modules for streaming, SQL, machine learning and graph processing.﻿ It's an open source cluster computing framework.

<h4>Hadoop</h4>
Hadoop is an open-source software framework for storing data and running applications on clusters of commodity hardware. It provides massive storage for any kind of data, enormous processing power and the ability to handle virtually limitless concurrent tasks or jobs (summary from [here](﻿www.sas.com/en_us/insights/big-data/hadoop.html)).

<h3>Other</h3>

<h4>Google Analytics</h4>
Summary being written.

<h4>Tableau</h4>
[Link](http://www.tableau.com/)

Array of commercially available tools for big data & analytics analysis.
