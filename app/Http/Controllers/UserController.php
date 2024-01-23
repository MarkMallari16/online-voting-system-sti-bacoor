<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Redirect;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();

        return response()->json(['users' => $users]);
    }
    public function votes()
    {
        return $this->hasMany(Vote::class);
    }
    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required', // Field 'name' is required and cannot be empty
            'email' => 'email',    // Field 'email' should be a valid email format
            'user_level' => 'in:admin,moderator,voter', // Field 'user_level' should be one of the specified values
            // Add other fields as needed
        ]);
    
        // Find the user by ID
        $user = User::findOrFail($id);
    
        // Update user data
        $user->update([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'user_level' => $request->input('user_level'),
            // Add other fields as needed
        ]);
    
        // Return a response, e.g., a success message or the updated user data
        return redirect()->back()->with('success', 'User updated successfully');
    }
public function destroy(User $user)
{
    $user->delete();

    // Return an Inertia response with a success message or any additional data
    return redirect()->back()->with('success', 'User deleted successfully');
}
}