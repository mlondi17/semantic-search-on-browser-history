# Semantic-Search-On-Browser-History

Conduct a semantic search on the browser history stored in Firebase Firestore.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Getting Started

### Prerequisites

Access your Firestore database containing tab URLs. If your database doesn't currently have the URLs, visit [this repo](https://github.com/mlondi17/save-tabs-to-firebase)  to populate it with the necessary information. Get a free [mongodb atlas](https://www.mongodb.com/cloud/atlas/lp/try4?utm_source=google&utm_campaign=search_gs_pl_evergreen_atlas_core-high-int_prosp-brand_gic-null_emea-za_ps-all_desktop_eng_lead&utm_term=mongodb%20atlas&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=19638527018&adgroup=151411906931&cq_cmp=19638527018&gad_source=1&gclid=CjwKCAiA75itBhA6EiwAkho9e6rxYdRpY80nZb4MNvURcHsbyuaI88j1FUPboh8M_d2YNHkojko9BBoCfisQAvD_BwE) account. [Follow this](https://www.youtube.com/watch?v=JEBDfGqrAUA&t=207s) video on help how to set up your atlas account to get your connection string and also get your [hugging face token](https://huggingface.co/).

You will need:
-firebase config settings
-mongodb atlas connection string
-huggingface access token
### Installation 

1. Install firebase in the command line.
  ```bash
  npm install firebase
   ```
2. Install mongodb 
  ```bash
  npm install mongodb
  ```
3. Install metadata-scraper
  ```bash
  npm install metadata-scraper
  ```
4. Then Install pymongo
  ```bash
  pip install pymongo
  ```

### Usage

1. You have to find the description of the urls that are in your firestore database and store them in mongodb atlas. Run url_description.js to do that.

2. In order to perform semantic search on our urls we have to first generete the embeddings and create a search index on atlas. Make sure you [follow the video](https://www.youtube.com/watch?v=JEBDfGqrAUA&t=207s) on how to do that. 

3. After generate the embeddings and set up your search index in atlas. You can now query your database for the url that matches your description. You can run semantic_search.py and insert your query.


## License

This project is licensed under the [MIT License]()



