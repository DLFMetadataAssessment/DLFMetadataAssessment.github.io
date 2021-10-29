---
title: Metadata Assessment Framework and Guidance
layout: page
permalink: framework
---
   {::options parse_block_html="true" /}
   
   <a href="/Sandbox/projects">Projects</a>->Metadata Assessment Framework and Guidance
   
   <ul>
	<li><a href="#Metadata_metrics">Metadata metrics</a></li>
	<li><a href="#Determine_what_to_assess">Determine what to assess</a></li>
	<li><a href="#Get_your_data">Get your data</a></li>
	<li><a href="#Select_the_right_tools">Select the right tools</a></li>
	<li><a href="#Documenting_assessment">Documenting assessment</a></li>
	
</ul>

   <h3 id="Metadata_metrics">Metadata metrics</h3>

   <h4>Determine what metadata quality means to you</h4>
   Metadata quality is subjective. How you define metadata quality will be unique to the core functions and mission of your institution or needs. Bruce and Hillmann’s 2004 article, “<a href="http://ecommons.cornell.edu/handle/1813/7895">The Continuum of Metadata Quality</a>,” defines a framework with seven categories of metadata quality and is noteworthy for influencing the subject’s subsequent exploration in the libraries, archives, and museums (LAM) context. Please see our list of <a href="/Sandbox/publications">recommended publications</a> for further investigation.


   <h4>Sample metrics for common metadata quality criteria</h4>
   The following list presents common quality criteria and assertions and is intended to serve as a prompt for thinking about your metadata. This list is not exhaustive, but rather provides focus areas for evaluating metadata. Metadata supports use: there may be other quality dimensions and definitions not listed here that would be more meaningful measures for your use case.

   * **Completeness:** The element, property, and/or attribute is present.
   * **Accuracy:** Information is correct both semantically and syntactically.
   * **Accessibility:** Metadata can be read by both humans and machines.
   * **Conformance to expectations:** Values adhere to the expectations of your defined user communities (both internal and external).
   * **Consistency:** Semantic and structural values and elements are represented in a consistent manner across records. Values are consistent within your domain.
   * **Timeliness:** When the resource changes, the metadata is updated accordingly. When additional metadata becomes available or when metadata standards change, the metadata associated with the resource changes.
   * **Provenance:** You have information about the source of the metadata, and you can track metadata transformations back to the original form of the metadata record.

<a href="#top">Back to top</a>

   <h3 id="Determine_what_to_assess">Determine what to assess</h3>

   <h4>Documentation as a starting point</h4>
   Well-documented practices and policies increase assessment efficiency and effectiveness. Strategic documentation can increase and improve communication across different communities (creators, stakeholders, users) and provide a record of decisions. Documentation about local metadata practices and policies can take many forms and may be known as guidelines, standards, data dictionaries, or application profiles. In the following sections we use the term “application profile” to refer to this type of documentation.


   <h4>Your application profile</h4>
   An application profile is a document that outlines your institutional/consortial metadata schema practice. It defines your metadata elements and properties, and delineates obligations and constraints for use. An application profile also establishes context for metadata implementers and aggregators. The document provides a human-readable summary of your schema’s characteristics, which is critical for metadata assessment planning, review, and revision. Application profiles could be used for non-MARC (e.g., <a href="https://web.archive.org/web/20160412183939/https://dp.la/info/wp-content/uploads/2015/03/MAPv4.pdf">DPLA</a>) or even MARC metadata (e.g., <a href="https://www.loc.gov/aba/pcc/bibco/bsr-maps.html">BIBCO Profiles</a>).

   Your application profile establishes a foundation for the development of your approach to metadata assessment by clearly specifying requirements, ranges (e.g., controlled vocabularies and/or data types), and permissible cardinality. Application profiles can also include how external standards and schemas map to your institutional metadata.

   For example, an application profile can include the following components to describe each element included in the profile:
   * **Element title:** the title of the element (e.g., “Alternative title”)
   * **Predicate:** a definition of the namespace and element to which the field is mapped (e.g., dcterms.alternative)
   * **Display label:** how the title of the element will be displayed to end users (e.g., “Alternate title”)
   * **Definition:** a brief description of the element’s purpose and the information it contains (e.g., “An alternative name for the resource”)
   * **Obligation:** indicates whether or not element is required
   * **Cardinality:** indicates the repeatability of the field (e.g., 0-n)
   * **Range:** what type of data can be entered into the field (e.g., text string, URI)
   * **Input guidelines:** where the data to populate the field is obtained and how it should be formatted and entered (e.g., title input guidelines for correspondence may indicate titles should be formatted as “Letter from [sender] to [recipient], [date]” in your repository)

   Whether creating an application profile from scratch or updating a legacy profile, it’s helpful to review the application profiles of other institutions, especially those with similar collections and/or functional requirements. Also, while your application profile can be highly tailored to the metadata elements, controlled vocabularies, or functional requirements of your institution, it’s important to be aware of metadata standards within the cultural heritage community (or the communities with which your institution is associated) and, where it makes sense to do so, to align local practices with community standards. Examples of metadata profiles and mappings between common metadata schema are available in the <a href="https://dlfmetadataassessment.github.io/MetadataSpecsClearinghouse/">Metadata Application Profile (MAP) Clearinghouse</a>, a project maintained by the DLF AIG Metadata Assessment Working Group. For more about the MAP Clearinghouse, see <a href="https://github.com/DLFMetadataAssessment/MetadataSpecsClearinghouse/wiki">the project wiki</a>.


   <h4>Considerations for prioritizing assessment</h4>
   How you prioritize assessment depends on your application profile, technical and human resources, institutional strategic goals, and immediate needs. Below are some sample considerations for prioritizing your approach:

   * *Baseline compliance with your application profile:* check for presence of minimum mandatory elements
   * *Vocabulary compliance with your application profile:* assess your metadata for compliance with specified controlled vocabularies (e.g., for fields like language, type, and format). Compliance with a vocabulary and related identifiers for terms/entities may be a priority in preparation for migration of data repositories, representations, and formats.
   * *Repository migration:* assess elements key to facilitating repository migration
   * *Aggregator requirements:* assess the elements required by an aggregator to which you contribute
   * *Available resources:* select the elements most readily assessed/remediated with available technological and human resources
   * *Discovery needs:* if you have a project that will improve faceting in your repository, you might prioritize assessment for keywords or subjects


   <h4>Keeping things simple</h4>
   The best assessment approach is one that you’re able to put into practice to meet your objectives. There are many well-documented assessment approaches that utilize weighted scoring and algorithms; some may resonate with your technological capabilities and assessment goals. A couple examples from our <a href="https://www.zotero.org/groups/metadata_assessment">Zotero citations list</a> include:

   * Ochoa, X., & Duval, E. (2009). Automatic evaluation of metadata quality in digital repositories. *International Journal on Digital Libraries, 10*(2-3), 67–91. [https://doi.org/10.1007/s00799-009-0054-4](https://doi.org/10.1007/s00799-009-0054-4)
   * Gavrilis, D.et al. (2015). Measuring Quality in Metadata Repositories. In S. Kapidakis, C. Mazurek, & M. Werla (Eds.), *Proceedings from the 19th International Conference on Theory and Practice of Digital Libraries* (pp. 56–67). Poznań, Poland: Springer. [https://doi.org/10.1007/978-3-319-24592-8_5](https://doi.org/10.1007/978-3-319-24592-8_5)

   If the intricacies of weighted scoring loom as obstacles to progress, use an approach that’s most readily implemented to kickstart your metadata assessment and get work done.

<a href="#top">Back to top</a>

   <h3 id="Get_your_data">Get your data</h3>

   <h4>Preparation</h4>
   You’ll need access to your metadata in a format suitable for analysis. Some systems include functionality for the export of data from a user interface, but others do not; you may need to work with your developers on extracting the data directly from your database. It’s helpful to know ahead of time what data format you’ll need, which will depend on the tools and techniques you’ll use to assess your metadata. While this document's purpose is to address metadata assessment, data format decisions impact remediation work in the cycle of metadata review and revision.


   <h4>Data formats</h4>
   If your data is “locked” into specific formats or systems, it may limit your ability to use different types of assessment tools and procedures. Use common, structured formats (like the ones described below) and extract the data in a way that minimizes risk of unintentional modification.

   If you are exporting from a database, you may want your data in a format that you can iterate through with a script, such as JSON, XML, or character delimited value formats (CSV, TSV). If you’ll be analyzing using a spreadsheet or a tool like OpenRefine (see next section), you may prefer something flatter and less hierarchical, like CSV. Keep in mind that some file formats, like Microsoft Excel (.xls, .xlsx) contain embedded formatting that may make it more difficult to process in different analysis and refinement tools; embedded formatting can also cause problems when (re)importing into a system.


   <h4>Data export considerations</h4>
   Metadata assessment is valuable as an iterative process over time. The following considerations and documentation recommendations aim to ensure that reproducibility and transparency are part of your data export process.

   * **Reproducibility:** Will you be able to retrieve the data in the exact same way at a later date? In order to reproduce your process, what information can you record to describe how the data was queried or extracted?
   * **Modification risks:** Does the export process include any potential modification of the data? Common scenarios that could impact reproducibility include: a conditional export of a subset of values, saving an Excel document as a CSV, appending data to an existing file, overwriting an existing file with a new data set.
   * **Self-description:** Does your dataset have a version number or date associated with it? How can you describe and track this dataset in your assessment—and potentially against future assessments—in a streamlined and consistent way?

<a href="#top">Back to top</a>

   <h3 id="Select_the_right_tools">Select the right tools</h3>
   When evaluating potential tools, the ideal tool or toolset is something within technical reach that also meets your purposes and aligns with your budget. There are a lot of options out there. Fortunately, there are resources available to help with selecting and using new tools.  

   The DLF Metadata Assessment Environmental Scan identified a variety of tools and sorted them into categories that may match your metadata assessment project needs. An updated overview of the tools is forthcoming.

   As you review potential tools, revisit the factors that helped determine your assessment approach. Also, consider how you will be getting your data—different tools may be suitable depending on how you can export/transform it. When evaluating possible tools, think about the tools or methodologies you are already familiar with and how much time you might have to learn a new software program or acquire a new skill. Metadata assessment is a good opportunity to begin learning some code, or expand your coding experience.


   <h4>Supporting tool use</h4>
   You’ll likely need to account for the following resources when working with a new tool for metadata assessment:

   * Staff (including yourself!) who know how to use tools or have the time to learn a new tool
   * Technological ecosystem (e.g., the ability to easily install a new tool, compatibility with data format and workflow)
   * Budget

   In addition to the three resource considerations mentioned above there is a fourth key resource:

   * Support

   It is inevitable that once you plunge enthusiastically into metadata assessment you’ll find you need a bit of help. Plan ahead. Some tools have more extensive documentation or more active communities than others; these resources may be helpful or daunting depending on your skill level. For a resource that requires no metadata or technical expertise, we recommend the tool-agnostic <a href="https://www.diglib.org/groups/dlf-metadata-support-group/">DLF Metadata Support Group</a>, which provides a friendly community on Slack that is “a place to share resources, strategies for working through some common metadata conundrums, and reassurances that you’re not the only one that has no idea how that happened.” Identifying resources to support your tool use before you start will provide a foundation for finding solutions when you encounter issues down the road.

<a href="#top">Back to top</a>

   <h3 id="Documenting_assessment">Documenting assessment</h3>
   Documentation is an important part of metadata quality analysis.

   * **Advocacy.** Documentation is not only is a means to record and share institutional knowledge, but is also an important tool for raising awareness about work that can be “invisible.”
   * **Demystification.** Metadata can be cryptic to many. Documentation is an opportunity to increase transparency to support greater understanding by stakeholders and users: introduce domain concepts in plain language with definitions for elements, metadata quality criteria, remediation strategies, and the roles those elements play in any front-end digital library interface as well as your back-end repository.
   * **Sustainability.** Structure your documentation so that it can be an extensible template for future assessment initiatives. Documentation also supports project sustainability during staffing transitions.
   * **Compliance.** When multiple staff are performing metadata analyses, documentation ensures that everyone uses the same structure and metrics.
   * **Growth.** As you progress, you’ll continue to test and refine your approach. Documentation creates benchmarks that mark progress over time.

<a href="#top">Back to top</a>
