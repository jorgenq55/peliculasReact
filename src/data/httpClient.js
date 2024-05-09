const API="https:api.themoviedb.org/3"
export function get(path){
    return fetch(API+path,{
        headers:{
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Njk1ZmQzYmI4NTZjNjU1MTk5YTgyYzM2NDNkMWRmOSIsInN1YiI6IjY2MTJlMjM1ZDdmNDY1MDEyZTY4OWQ3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2L2T3yCgX2r5nQym4FSnFzAcZ-W-KhKljuaMkDVb5lA",
            "Content-Type": "applicacion/json;charset=utf-8"
        }    
    }).then((result)=>result.json());
}