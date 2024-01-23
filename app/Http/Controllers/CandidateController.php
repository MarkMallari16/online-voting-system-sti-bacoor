<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Candidate;
class CandidateController extends Controller
{
    public function index()
    {
        $candidates = Candidate::all();
        return response()->json($candidates);
    }

    public function store(Request $request)
    {
        $candidate = Candidate::create($request->all());
        return response()->json($candidate);
    }

    public function show($id)
    {
        $candidate = Candidate::findOrFail($id);
        return response()->json($candidate);
    }

    public function update(Request $request, $id)
    {
        $candidate = Candidate::findOrFail($id);
        $candidate->update($request->all());
        return response()->json($candidate);
    }

    public function destroy($id)
    {
        $candidate = Candidate::findOrFail($id);
        $candidate->delete();
        return response()->json(['message' => 'Candidate deleted successfully']);
    }
}
