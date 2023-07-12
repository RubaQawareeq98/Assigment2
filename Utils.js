//
export async function utility() {
    let response = await fetch("https://randomuser.me/api/?results=30");
    let body = await response.json();
    let {results} = body;
    return results;
}


