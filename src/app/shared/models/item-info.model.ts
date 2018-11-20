export interface ItemInfo {
    type: 'hotel' | 'fishing' | 'tours';
    name: string;
    url: string;
    phone: string;
    address: {
        street: string;
        houseNumber: string;
        city: string;
    };
}
