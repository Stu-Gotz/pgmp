# About
This is the set of python scripts (and resulting data) that runs the back-end collection for the corresponding Vue application in the parent directory. All data is collected from Smogon's usage statistics, found at [this URL](https://www.smogon.com/stats/). Requests are made using the request library by appending a base URL with matching URLs of stats data. This data is parsed from plaintext into a CSV files, stored locally and sent to a SQL database, to have a rolling 3 months of available stats data. `smogon_pull.py` uses `_utils.py`'s helper functions to parse the data after iterating over the URLs. `DBManager.py`'s `SQLManager` class controls the SQL database data flow. `db_updater.py` is run by a scheduled task in windows to call the aforementioned and update the data on the 5th of every month.

#Dislcaimer
This is not done in affiliation with Smogon.com nor the Nintendo corporation. All names of Pokémon are owned by Nintendo, all data is owned by Smogon. This is part of a post-graduate major project at Anglia Ruskin University.

