export class Rss {
    feed: Feed;
    items: Item[];
}

export class Feed {
    title: string;
    url: string;
}

export class Item {
    description: string;
    pubDate: Date;
    title: string;
}