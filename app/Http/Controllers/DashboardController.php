<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function admin(){
        return Inertia::render('AdminDashboard');
    }
    public function moderator()
    {
        return Inertia::render('ModeratorDashboard');
    }

    public function user()
    {
        return Inertia::render('Dashboard');
    }

    public function home()
    {
        return Inertia::render('Home');
    }
}
