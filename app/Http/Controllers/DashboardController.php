<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function admin()
    {
        if (auth()->check() && auth()->user()->user_level === 'admin') {
            return Inertia::render("");
        }
    
        return redirect()->route('admindashboard')->with('error', 'You do not have permission to access the admin dashboard.');
    }
    
    public function moderator()
    {
        if (auth()->check() && auth()->user()->user_level === 'moderator') {
            return view('moderatordashboard');
        }
    
        return redirect()->route('dashboard')->with('error', 'You do not have permission to access the moderator dashboard.');
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
