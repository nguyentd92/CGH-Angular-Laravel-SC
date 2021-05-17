
// DISCOUNT PROGRAMS API
export const GET_DISCOUNT_PROGRAMS_API = 'get-discount-programs';

export interface GetDiscountProgramsRequest {
  limit: number;
}

export interface GetDiscountProgramsResponse {
  data: Array<DiscountProgram>
}

export interface DiscountProgram {
  title: string;
  value: string;
  bg_color?: string;
  link?: string;
}


// BANNERS API
export const GET_BANNERS_API = 'get-banners';

export interface GetBannersRequest {

}

export interface GetBannersResponse {
  data: Array<Banner>
}

export interface Banner {
  collection: string;
  title: string;
  btn_title: string;
  link: string;
}


// ARRIVALS API
export const GET_ARRIVALS_API = 'get-arrivals';

export interface GetArrivalsRequest {
  category: string;
}

export interface GetArrivalsResponse {
  data: Array<Arrival>
}

export interface Arrival {
  slug: string;
  unit_price: string;
  name: string;
  image_url: string;
}
