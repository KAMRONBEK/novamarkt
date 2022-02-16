export interface LoginResponse {
	id: number;
	device_id: string;
	token: string;
	name: string;
	phone: string;
	email?: any;
	photo: string;
	balance: number;
	date: string;
	gender: boolean;
}

export interface RegisterData {
	code: string;
	token: string;
}

export interface RegisterResponse {
	data: RegisterData;
}

export interface RegisterErrors {
	phone: string[];
}

export interface RegisterResponseErrors {
	errors: RegisterErrors;
}

export interface Brand {
	id: number;
	name: string;
	description: string;
	photo: string;
}

export interface Category {
	id?: number;
	name?: string;
	description?: string;
	photo?: string;
}

export interface ProductItemResponse {
	id: number;
	name: string;
	price: number;
	price_old: number;
	discount?: any;
	brand: Brand;
	category: Category;
	views: number;
	rating: number;
	photo: string;
}

export interface CartItemResponse extends ProductItemResponse {
	amount: number;
}

export interface Self {
	href: string;
}

export interface First {
	href: string;
}

export interface Last {
	href: string;
}

export interface Links {
	self: Self;
	first: First;
	last: Last;
}

export interface Meta {
	totalCount: number;
	pageCount: number;
	currentPage: number;
	perPage: number;
}

export interface BaseResponse<T> {
	data: T[];
	_links: Links;
	_meta: Meta;
}

export interface NewsItemResponse {
	id: number;
	name: string;
	description_mini: string;
	views: number;
	photo: string;
	date: string;
}

export interface AddCardRequest {
	card_type_id: number;
	card_number: string;
	card_expire: string;
	card_phone_number: string;
}

export interface CardTypeItem {
	id: number;
	name: string;
	description: string;
	photo: string;
}

export interface CardType {
	id: number;
	name: string;
	description: string;
	photo: string;
	childs: any[];
}

export interface CardItem {
	id: number;
	cardType: CardType;
	card_number: string;
	card_expire: string;
	card_phone_number: string;
	status: number;
	date: string;
}

export interface QuestionsResponse {
	id: number;
	question: string;
	answer: string;
	date: string;
}

export interface SendQuestionValue {
	name?: string;
	email?: string;
	message?: string;
}
