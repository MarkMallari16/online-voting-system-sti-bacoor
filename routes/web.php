    <?php

    use App\Http\Controllers\ProfileController;
    use Illuminate\Foundation\Application;
    use Illuminate\Support\Facades\Route;
    use Inertia\Inertia;
    use App\Http\Controllers\DashboardController;
    use App\Http\Controllers\UserController;
    use App\Http\Controllers\CandidateController;

    /*
    |--------------------------------------------------------------------------
    | Web Routes
    |--------------------------------------------------------------------------
    |
    | Here is where you can register web routes for your application. These
    | routes are loaded by the RouteServiceProvider within a group which
    | contains the "web" middleware group. Now create something great!
    |
    */

    Route::get('/', function () {
        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
        ]);
    });


    //Admin Dashboard
    Route::get('/admindashboard', [DashboardController::class, 'admin'])->middleware(['auth', 'verified'])->name('admindashboard');

    //Moderator Dashboard
    Route::get('/moderatordashboard', [DashboardController::class, 'moderator'])->middleware(['auth', 'verified'])->name('moderatordashboard');


    //Users Dashboard
    Route::get('/dashboard', [DashboardController::class, 'user'])->middleware(['auth', 'verified'])->name('dashboard');


    //Main Page
    Route::get('/home', [DashboardController::class, 'home'])->middleware(['verified'])->name('home');


    Route::resource('candidates', CandidateController::class);
    
    //delete user
    Route::delete('/users/{user}', [UserController::class, 'destroy']);
    //update user
    Route::put('/users/{id}',[UserController::class, 'update']);

    //candidate 
    Route::get('/candidates', [CandidateController::class, 'index'])->name('candidates.index');
    Route::post('/candidates', [CandidateController::class, 'store'])->name('candidates.store');


    Route::middleware('auth')->group(function () {
        Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
        Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
        Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    });

    Route::post('/logout', [LogoutController::class, 'logout'])->name('logout');
    require __DIR__.'/auth.php';
