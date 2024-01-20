export async function load({ fetch }) {
    const response = await fetch('https://advent.sveltesociety.dev/data/2023/day-one.json');
    const children = await response.json();
    // Sort the data by tally
    type entry = {
        name: string;
        tally: number;
    }
    children.sort((a: entry, b: entry) => b.tally - a.tally);
    return { children };
}
