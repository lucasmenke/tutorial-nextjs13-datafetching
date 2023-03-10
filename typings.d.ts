type Characters = {
    info: Info
    results: Result[]
  };
  
  type Info = {
    count: number
    pages: number
    next: string
    prev: any
  };
  
  type Result = {
    id: number
    name: string
    status: string
    species: string
    type: string
    gender: string
    origin: Origin
    location: Location
    image: string
    episode: string[]
    url: string
    created: string
  };
  
  type Origin = {
    name: string
    url: string
  };
  
  type Location =  {
    name: string
    url: string
  };