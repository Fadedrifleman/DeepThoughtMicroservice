# DeepThoughtMicroservice
Here I have create 5 REST APIs:

	-GET event (/api/v3/app/events?id=:event_id) 
	//		Gets an event by its unique id
	//		Payload is req.query.id
			
	-GET events (/api/v3/app/events?type=latest&limit=5&page=1) 
	//		Gets an event by its recency & paginate results by page number and limit of events per page
	//		Payload is req.query.type, req.query.limit, req.query.page
			
	-POST event (/api/v3/app/events)
	//		Creates an event and returns the Id of the event i.e. created
	//		Payload is req.body {name, tagline, schedule, description, moderator, category, sub_category, rigor_rank} and req.file { files[image] }
			
	-PUT event (/api/v3/app/events/:id)
	//		Update any field of existing event
	//		Payload  is req.params.id and req.body , req.file
	
	-DELETE event (/api/v3/app/events/:id)
	//		Deletes an event based on its Unique Id
	//		Payload is req.params.id
			
			
I have used several libraries :

	-"body-parser": "^1.20.0"
	//			To pass req objects (to get data via form)
		
	-"express": "^4.18.1"
	//			framework
		
	-"mongodb": "^4.9.0"
	//			to connect and peform CRUD operations to DB
		
	-"multer": "^1.4.5-lts.1"
	//			to pass req.file (to get files via form)
