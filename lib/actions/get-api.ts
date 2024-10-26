export const GetAllEvents = async () => {
    const response = await fetch(`${process.env.BASE_URL}/events`);
    const data = await response.json();
    return data;
}


export const GetEventById = async (id: string) => {
    const response = await fetch(`${process.env.BASE_URL}/events/${id}`);
    const data = await response.json();
    return data;
}


export const GetEventsByKeyword = async (keyword: string) => {
    const response = await fetch(`${process.env.BASE_URL}/events?active=-1&q=${keyword}`);
    const data = await response.json();
    return data;
}


export const GetActiveEvents = async () => {
    const response = await fetch(`${process.env.BASE_URL}/events?active=1`);
    const data = await response.json();
    return data;
}

export const GetInactiveEvents = async () => {
    const response = await fetch(`${process.env.BASE_URL}/events?active=0`);
    const data = await response.json();
    return data;
}


//https://event-api.dicoding.dev/events/{id}    
//https://event-api.dicoding.dev/events?active=-1&q={keyword}
//https://event-api.dicoding.dev/events?active=0
//https://event-api.dicoding.dev/events?active=1