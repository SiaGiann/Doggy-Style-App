# Endpoints list

|Name|Endpoint|Method|Params|Description|
|---|---|---|---|---|
|dogvote|`'/'`|**GET**|-|_Returns a random dog image and its breed name_|
|voteup|`'voteup/'`|**POST**|user_id(int), dog_id(int)|_Finds or creates a dog by its breed name and returns its id. Next, using this dog id it finds or creates a points record which binds together the dog and the current user. Then it updates this record by adding 5 points to the record's points_|
|votedown|`'votedown/'`|**POST**|user_id(int), dog_id(int)|_Finds or creates a dog by its breed name and returns its id. Next, using this dog id it finds or creates a points record which binds together the dog and the current user. Then it updates this record by subtracting 3 points to the record's points_|
