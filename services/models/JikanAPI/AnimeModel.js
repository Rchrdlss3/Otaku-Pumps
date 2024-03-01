const Titles = {
	"type":"",
	"title":""
}
const Prop = {
    "from": {
        "day": 0,
        "month":0,
        "year":0
    },
    "to": {
        "day": 0,
        "month":0,
        "year":0
    }
}
const Aired = {
	"from" : "",
	"to": "",
	"prop": Prop
}
const Broadcast = {
    "day" : "",
    "time":"",
    "timezone":"",
    "string":""
}
const Studio = {
    "mal_id":0,
    "type":"",
    "name":"",
    "url":""
}
const Producers = {
    "mal_id": 0,
    "type":"",
    "name":"",
    "url":""
}
const Genre = {
    "mal_id":0,
    "type":"",
    "name":"",
    "url":""
}
const Demographic = {
    "mal_id":0,
    "type":"",
    "name":"",
    "url":""
}

const Anime = {
    "mal_id": 0,
    "url":"",
    "images": {
        "jpg": Jpg,
        "webp": WebP
    },
    "trailer": Trailer,
    "approved": false,
    "titles": [Titles],
    "title_english": "",
    "title_japanese": "",
    "title_synonyms": [""],
    "type": "",
    "source": "",
    "episodes": 0,
    "airing": false,
    "aired": Aired,
    "duration":"",
    "rating":"",
    "score":0,
    "scored_by": 0,
    "rank":0,
    "popularity":0,
    "members":0,
    "favorites":0,
    "synopsis":"",
    "background":"",
    "season":"",
    "year":0,
    "broadcast": {},
    "producers":[Producers],
    "licensors":[],
    "studios":[Studio],
    "genres":[Genre],
    "explicit_genres": [],
    "themes":[],
    "demographics":[Demographic]
}

const TopAnime = {
    "mal_id": 0,
	"url": "",
	"images": {
	"jpg": jpg,
	"webp": webp
},
	"trailer": Trailer,
	"approved" : false,
	"titles": [Titles],
	"title_english": "",
	"title_japanese": "",
	"title_synonyms": [""],
	"type": "",
	"source": "",
	"episodes": 0,
	"status":"",
	"airing": false,
	"aired": Aired,
	"duration":"",
	"rating":"",
	"score": 0.0,
	"scored_by": 0,
    "rank": 0,
	"popularity": 0,
	"members":0,
	"favorites":0,
	"synopsis":"",
	"background":"",
	"season":"",
	"year":0,
	"broadcast": {},
	"producers": [],
	"licensors":[],
	"studios": [],
	"genres":[],
	"explicit_genres":[],
	"themes":[],
	"demographics":[]
}

const PaginationItems = {
    "count":0,
    "total":0,
    "per_page":0
}
const Pagination = {
    "last_visible_page": 0,
    "has_next_page": false,
    "current_page": 0,
    "items": PaginationItems
}
const TopAnimes = {
    "pagination" : Pagination,
    "data": [TopAnime]
}