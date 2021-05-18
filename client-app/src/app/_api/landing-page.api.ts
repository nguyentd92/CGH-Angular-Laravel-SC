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

export interface Testimonial {
  quote: string;
  user_name: string;
  user_address: string;
  user_avt_url: string;
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
  bg_url: string;
  link?: string;
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

// CATEGORIES API
export const GET_CATEGORIES_API = 'get-categories';

export interface GetCategoriesRequest {

}

export interface GetCategoriesResponse {
  id: number;
  name: string;
}

// HOT SALE API

export const GET_HOT_SALE_API = 'get-hot-sale'

export interface GetHotSaleRequest {}

export interface GetHotSaleResponse {
  isHot: boolean;
  name: string;
  description: string;
  unit_price: string;
  sale_price: string;
}

// TESTIMONIALS API

export const GET_TESTIMONIALS_API = 'get-testimonials';

export interface GetTestimonialsRequest {}

export interface GetTestimonialResponse {
  data: Array<Testimonial>
}
