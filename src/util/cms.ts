export function getImage(image) {
    return image?.data?.attributes?.url;
}

export async function fetchAPI(path: string) {
    const BLOG_API_URL = "https://retire-us.herokuapp.com/api";
    const requestUrl = `${BLOG_API_URL}${path}?populate=deep`;
    let data: any;

    try {
        const response = await fetch(requestUrl);

        data = await response.json();
    } catch (error) {
        data = { data: null };
    }

    return data;
}
