<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;

class DashboardController extends Controller
{
    public function admin()
    {
        if (auth()->check() && auth()->user()->user_level === 'admin') {
            return Inertia::render('AdminDashboard');
        }

        return redirect()->route('admindashboard')->with('error', 'You do not have permission to access the admin dashboard.');
    }

    public function moderator()
    {
        if (auth()->check() && auth()->user()->user_level === 'moderator') {
            return Inertia::render('ModeratorDashboard');
        }

        return redirect()->route('dashboard')->with('error', 'You do not have permission to access the moderator dashboard.');
    }

    public function user()
    {
        $users = User::All();
        return Inertia::render('Dashboard',['users' => $users]);
    }

  
}
