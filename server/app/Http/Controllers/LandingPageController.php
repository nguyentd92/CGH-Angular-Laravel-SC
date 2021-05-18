<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LandingPageController extends Controller
{
    public function getBanners() {
        $banners = [
            [
                "collection" => "ON ACCESORIES FROM LARAVEL",
                "title" => "SALE 30%",
                "btn_title" => "SHOP NOW"
            ],
            [
                "collection" => "IN BAGS EXCEPTING THE NEW COLLECTION FROM LARAVEL",
                "title" => "DESIGNER BAGS",
                "btn_title" => "SHOP NOW"
            ]
        ];

        $response = [
            "data" => $banners
        ];

        return response()->json($response);
    }
}
