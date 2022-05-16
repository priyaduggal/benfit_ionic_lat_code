import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'forgotpassword',
    loadChildren: () => import('./forgotpassword/forgotpassword.module').then( m => m.ForgotpasswordPageModule)
  },{
    path: 'resetpassword',
    loadChildren: () => import('./resetpassword/resetpassword.module').then( m => m.ResetpasswordPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'onboardscreen',
    loadChildren: () => import('./onboardscreen/onboardscreen.module').then( m => m.OnboardscreenPageModule)
  },
  {
    path: 'choosegender',
    loadChildren: () => import('./choosegender/choosegender.module').then( m => m.ChoosegenderPageModule)
  },
  {
    path: 'completeprofile',
    loadChildren: () => import('./completeprofile/completeprofile.module').then( m => m.CompleteprofilePageModule)
  },
  {
    path: 'aim',
    loadChildren: () => import('./aim/aim.module').then( m => m.AimPageModule)
  },
  {
    path: 'productdetails/:id',
    loadChildren: () => import('./productdetails/productdetails.module').then( m => m.ProductdetailsPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./checkout/checkout.module').then( m => m.CheckoutPageModule)
  },
  {
    path: 'success',
    loadChildren: () => import('./success/success.module').then( m => m.SuccessPageModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./orders/orders.module').then( m => m.OrdersPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'chooseworkout',
    loadChildren: () => import('./chooseworkout/chooseworkout.module').then( m => m.ChooseworkoutPageModule)
  },
  {
    path: 'receipes',
    loadChildren: () => import('./receipes/receipes.module').then( m => m.ReceipesPageModule)
  },
  {
    path: 'mealsdietplans',
    loadChildren: () => import('./mealsdietplans/mealsdietplans.module').then( m => m.MealsdietplansPageModule)
  },
  {
    path: 'weekplanning',
    loadChildren: () => import('./weekplanning/weekplanning.module').then( m => m.WeekplanningPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'dailysummary',
    loadChildren: () => import('./dailysummary/dailysummary.module').then( m => m.DailysummaryPageModule)
  },
  {
    path: 'podcast',
    loadChildren: () => import('./podcast/podcast.module').then( m => m.PodcastPageModule)
  },
  {
    path: 'tabata',
    loadChildren: () => import('./tabata/tabata.module').then( m => m.TabataPageModule)
  },
  {
    path: 'bulletinboard',
    loadChildren: () => import('./bulletinboard/bulletinboard.module').then( m => m.BulletinboardPageModule)
  },
  {
    path: 'eventnews',
    loadChildren: () => import('./eventnews/eventnews.module').then( m => m.EventnewsPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'audioandvideo',
    loadChildren: () => import('./audioandvideo/audioandvideo.module').then( m => m.AudioandvideoPageModule)
  },
  {
    path: 'expertsignup',
    loadChildren: () => import('./expertsignup/expertsignup.module').then( m => m.ExpertsignupPageModule)
  },
  {
    path: 'livestreaming',
    loadChildren: () => import('./livestreaming/livestreaming.module').then( m => m.LivestreamingPageModule)
  },
  {
    path: 'livestreaminguser',
    loadChildren: () => import('./livestreaminguser/livestreaminguser.module').then( m => m.LivestreaminguserPageModule)
  },
  {
    path: 'chooseexpert',
    loadChildren: () => import('./chooseexpert/chooseexpert.module').then( m => m.ChooseexpertPageModule)
  },
  {
    path: 'activitylevel',
    loadChildren: () => import('./activitylevel/activitylevel.module').then( m => m.ActivitylevelPageModule)
  },
  {
    path: 'subscriptions',
    loadChildren: () => import('./subscriptions/subscriptions.module').then( m => m.SubscriptionsPageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then( m => m.ProductsPageModule)
  },
  {
    path: 'coupons',
    loadChildren: () => import('./coupons/coupons.module').then( m => m.CouponsPageModule)
  },
  {
    path: 'equipment',
    loadChildren: () => import('./equipment/equipment.module').then( m => m.EquipmentPageModule)
  },
  {
    path: 'getstarted',
    loadChildren: () => import('./getstarted/getstarted.module').then( m => m.GetstartedPageModule)
  },
  {
    path: 'loginteaser',
    loadChildren: () => import('./loginteaser/loginteaser.module').then( m => m.LoginteaserPageModule)
  },
  {
    path: 'foodresponsible',
    loadChildren: () => import('./foodresponsible/foodresponsible.module').then( m => m.FoodresponsiblePageModule)
  },
  {
    path: 'chooseequipment',
    loadChildren: () => import('./chooseequipment/chooseequipment.module').then( m => m.ChooseequipmentPageModule)
  },
  {
    path: 'expertsetting',
    loadChildren: () => import('./expertsetting/expertsetting.module').then( m => m.ExpertsettingPageModule)
  },
  {
    path: 'expertprofile',
    loadChildren: () => import('./expertprofile/expertprofile.module').then( m => m.ExpertprofilePageModule)
  },
  {
    path: 'scanner/:id',
    loadChildren: () => import('./scanner/scanner.module').then( m => m.ScannerPageModule)
  },
  {
    path: 'appcamera',
    loadChildren: () => import('./appcamera/appcamera.module').then( m => m.AppcameraPageModule)
  },
  {
    path: 'gallery',
    loadChildren: () => import('./gallery/gallery.module').then( m => m.GalleryPageModule)
  },
  {
    path: 'filterrating',
    loadChildren: () => import('./filterrating/filterrating.module').then( m => m.FilterratingPageModule)
  },
  {
    path: 'question8',
    loadChildren: () => import('./question8/question8.module').then( m => m.Question8PageModule)
  },
  {
    path: 'question9',
    loadChildren: () => import('./question9/question9.module').then( m => m.Question9PageModule)
  },
  {
    path: 'question10',
    loadChildren: () => import('./question10/question10.module').then( m => m.Question10PageModule)
  },
  {
    path: 'question11',
    loadChildren: () => import('./question11/question11.module').then( m => m.Question11PageModule)
  },
  {
    path: 'question13',
    loadChildren: () => import('./question13/question13.module').then( m => m.Question13PageModule)
  },
  {
    path: 'question12',
    loadChildren: () => import('./question12/question12.module').then( m => m.Question12PageModule)
  },
  {
    path: 'question2',
    loadChildren: () => import('./question2/question2.module').then( m => m.Question2PageModule)
  },
  {
    path: 'question3',
    loadChildren: () => import('./question3/question3.module').then( m => m.Question3PageModule)
  },
  {
    path: 'question4',
    loadChildren: () => import('./question4/question4.module').then( m => m.Question4PageModule)
  },
  {
    path: 'question5',
    loadChildren: () => import('./question5/question5.module').then( m => m.Question5PageModule)
  },
  {
    path: 'question6',
    loadChildren: () => import('./question6/question6.module').then( m => m.Question6PageModule)
  },
  {
    path: 'question7',
    loadChildren: () => import('./question7/question7.module').then( m => m.Question7PageModule)
  },
  {
    path: 'question14',
    loadChildren: () => import('./question14/question14.module').then( m => m.Question14PageModule)
  },
  {
    path: 'question15',
    loadChildren: () => import('./question15/question15.module').then( m => m.Question15PageModule)
  },
  {
    path: 'question16',
    loadChildren: () => import('./question16/question16.module').then( m => m.Question16PageModule)
  },
  {
    path: 'question17',
    loadChildren: () => import('./question17/question17.module').then( m => m.Question17PageModule)
  },
  {
	  
    path: 'foodrecomendation',
    loadChildren: () => import('./foodrecomendation/foodrecomendation.module').then( m => m.FoodrecomendationPageModule)
  },
  {
    path: 'weekexercise',
    loadChildren: () => import('./weekexercise/weekexercise.module').then( m => m.WeekexercisePageModule)
  },
  {
    path: 'devicepair',
    loadChildren: () => import('./devicepair/devicepair.module').then( m => m.DevicepairPageModule)
  },
  {
    path: 'deleteblog',
    loadChildren: () => import('./deleteblog/deleteblog.module').then( m => m.DeleteblogPageModule)
  },
  {
    path: 'quickbuy',
    loadChildren: () => import('./quickbuy/quickbuy.module').then( m => m.QuickbuyPageModule)
  },  {
    path: 'home-new',
    loadChildren: () => import('./home-new/home-new.module').then( m => m.HomeNewPageModule)
  },
  {
    path: 'activity-new',
    loadChildren: () => import('./activity-new/activity-new.module').then( m => m.ActivityNewPageModule)
  },
  {
    path: 'book-workout',
    loadChildren: () => import('./book-workout/book-workout.module').then( m => m.BookWorkoutPageModule)
  },
  {
    path: 'coaches',
    loadChildren: () => import('./coaches/coaches.module').then( m => m.CoachesPageModule)
  },
  {
    path: 'find-expert',
    loadChildren: () => import('./find-expert/find-expert.module').then( m => m.FindExpertPageModule)
  },
  {
    path: 'bookexpert',
    loadChildren: () => import('./bookexpert/bookexpert.module').then( m => m.BookexpertPageModule)
  },
  {
    path: 'findgym',
    loadChildren: () => import('./findgym/findgym.module').then( m => m.FindgymPageModule)
  },
  {
    path: 'findgymdetails',
    loadChildren: () => import('./findgymdetails/findgymdetails.module').then( m => m.FindgymdetailsPageModule)
  },
  {
    path: 'view-course-schedule',
    loadChildren: () => import('./view-course-schedule/view-course-schedule.module').then( m => m.ViewCourseSchedulePageModule)
  },
  {
    path: 'login-new',
    loadChildren: () => import('./login-new/login-new.module').then( m => m.LoginNewPageModule)
  },
  {
    path: 'signup-new',
    loadChildren: () => import('./signup-new/signup-new.module').then( m => m.SignupNewPageModule)
  },
  {
    path: 'forgot-pwd',
    loadChildren: () => import('./forgot-pwd/forgot-pwd.module').then( m => m.ForgotPwdPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
