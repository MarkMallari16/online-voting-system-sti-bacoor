<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use App\Models\candidate;

class CandidateController extends Controller
{


    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'platform' => 'required|string',
        ]);
        $user = candidate::create([
            'name' => $request->name,
            'description' => $request->description,
            'platform' => $request->platform,
        ]);


        return redirect()->route('dashboard');
    }
}
