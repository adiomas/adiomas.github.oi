# Policy



Feel free to send us any comments, suggestions or corrections you may have to bookstack@Q.agency. 🙂








## Policy


Guide points in these documents will cover the following:






- The Process


  - The process section defines and describes how the main process of handling frontend projects goes, responsibilities and results that are expected when we are included in the process itself.
- Internal tools


  - List of internal tools we use in the department and descriptions.
- Tech Book of Standards


  - All subjects regarding technological development standards are covered under this subject.






Mobile Team is covering Objective-C, Swift, Android (Kotlin & Java) and Flutter.


Every mobile developer must have one main technology (Swift for example), be educated in the way of our CI/CD solution and be able to support the app trough all of its phases. Developer must be educated in Apple and Google distribution services and be able to communicate professionally with the customer.


To develop a project effectively and on a high level, just knowing the technical solutions is not enough. Although technical knowledge is the zero condition to be able to perform the job, quality communication in the team and analysis of the projects before, current and after state is what brings in the best results.


It is each mobile developer's obligation to apply all or at least as many as possible of these guide points to each project. Since projects that arrive to execution in the mobile department there will be outliers and special conditions which are not always covered in this policy documents.


The most important course of action then is to seek advice with the project manager and mobile team lead.


Communication and feedback is very important and a part of Q’s culture. No rule is written in stone, but all changes need to be approved by the team lead. All ideas on how to improve our processes are valuable and will be taken into consideration.


This space will be frequently under modification since we will be adapting to the constantly changing mobile development environment.

















Sales, Project Management, Backend and Design can find useful information in The Process part of the Policy. We are covering most of the frequently asked questions.


Best results are brought by:








- Quality communication
- Detailed analysis
- Seeking advice
- Frequent two-way feedback
- Constantly learning and adapting









## The Process


### BEFORE a Project starts


#### When to go with Flutter?





Flutter was launched in 2018 by Google. It has proven itself a convenient toolkit, easy for creating animations and quality UI components.


Though it is still relatively new, there are already more than 100 000 Flutter applications available.


According to a 2021 developer survey , Flutter is the most popular cross-platform mobile framework used by worldwide developers. Up to now it continues to rise, confirming the product's enduring popularity. It has a rapidly growing community.


Flutter works under the principle "write once, run anywhere". That means you only need to write one set of code and deploy it on whichever platform you want:


- Android
- iOS
- Web
- MacOS
- Windows


Flutter provides smooth animations and user-friendly interface elements. 


Development is 20-50% faster compared to the creation of two native apps. This ease of development is one of Flutter’s main advantages.


Its performance is similar to native, while the apps remain visually consistent on different platforms. Even new apps look the same on older iOS or Android systems, so you never have to worry about supporting older devices.


Development is fast since Flutter benefits from features hot reload and hot restart. Hot reload allows you to see any changes in the UI instantly, reducing the waiting time between two changes.


Features are aligned on all platforms since they share the same code base, same goes with bugs and bugfixes.


Testing can be done on one place so it can be more detailed.


Perfect for MVPs since it has short time to market.


Q is an early adopter of Flutter. That means that we have a large and experienced Flutter team that can use it optimally.


Flutter apps need more space, so that might be one of its downsides when compared to Native.


Native is better (if budget allows it) for:


- AR/VR apps
- AI-triggered apps with big data
- Heavy computation apps
- Gaming apps
- iOT apps connecting with TV and Wallets


#### Web support


Flutter Web allows you to build highly performant and interactive web apps. However, it is not made for static web pages.


Its great as a web counterpart to your already existing Flutter mobile app. If you want to have optimised web user experience, some additional UI tweaks are needed.


You can use existing logic and UI elements to output web apps faster than other web frameworks.


The web version of your app doesn’t have to implement all features the mobile one does.


If a project has a web version, and the features are shared with mobile app, we should use Flutter to develop it.


Flutter web is ideal for interactive apps with animations and heavy UI elements.


In the case of static web pages with a lot of dense text, a more classic web development approach might bring better results, faster load times, and easier maintenance. It is not SEO friendly, at least in 2021.


#### Flutter vs React Native


Even though both frameworks are fantastic for mobile app development, Flutter has a lot of features that may help us design more appealing mobile apps with better user experiences while saving time and money.


Flutter is more user-friendly and easier to maintain. To maintain libraries and packages consistent and in line with one another, React Native needs a greater degree of care and dedication from the development team.


According to a 2021 developer survey , Flutter is the most popular cross-platform mobile framework used by worldwide developers.


Flutter has 137,000 Stars on Github, React Native has 101,000.


Given the constant development of Flutter's popularity over the last several years, many sources predict that the trend will continue in 2022 and beyond.


#### Estimate requirements


Throughout the entire project, developers estimate all the time. Estimates are an integral part of any project, being it agile scrum or old school waterfall project.


All estimations should be approved by team leader.


Before we start with the project estimation we need some basic info:






- Platform: Native or Flutter
- Supported target device (phone, tablet, watch)


  - If more targets are supported, should we create a separate design for every target or are we just resizing existing design
- What languages are supported
- What accessibility should we support (Voice over, Voice commands, etc)
- Who is working on backend, Q or a third party


  - If we are dealing with third party backend, we need a DEMO account if there is a login
  - We need API documentation if a project is ongoing
- Link to a repository if it exists (for an existing project)
- Deployment target (for example if deployment target is iOS9, our app will work only on devices that have iOS 9 or newer installed)


  - If we can choose deployment target, it should be 2 below a latest one (if currently latest iOS is 13, our deployment target should be 11)
  - The same applies to Android
- Wireframe with feature description for every screen
- If customer wants web application, in order to decide if we will use Flutter for web development, we need detailed information describing in what way the web app shares features with the mobile app. If web app shares same purpose as the mobile app, we can take Flutter in consideration to support iOS, Android and Web with the same codebase.
- If the project involves hardware and IOT:


  - Do we have an access to the hardware
  - Who will develop firmware
  - Documentation about hardware, firmware and api which mobile app will use to communicate with hardware











Top 10 companies that created their products using Flutter:








- Google Ads;
- eBay Motors;
- Toyota;
- BMW;
- Alibaba;
- Groupon;
- Realtor.com;
- Reflectly;
- Square;
- The New York Times.

























![](blob:https://q-agency.atlassian.net/83b5b949-d3b7-4f90-99e9-fcabe0da4a2d#media-blob-url=true&id=1414e2cd-53de-4b8c-90fe-5119ae3d7e5f&collection=contentId-95715590&contextId=95715590&mimeType=image%2Fpng&name=detailed_comparison_flutter_vs_react_native_bb705d675c.png&size=50186&width=1220&height=769&alt=)


























![](blob:https://q-agency.atlassian.net/0dea3b89-c69a-46b3-a712-addf928fca01#media-blob-url=true&id=f133f819-3275-4e3c-ba77-b34b5f985405&collection=contentId-95715590&contextId=95715590&mimeType=image%2Fwebp&name=flutter-vs-native-popularity-on-stackoverflow-1024x806.png.webp&size=21094&width=1024&height=806&alt=)







































Q uses several internal types of estimates:








- Ballpark - Used mostly for proposals (RfP) documents
- Discovery - Preparing and documenting projects for development phase
- Sprint Planning - Before each Sprint
- Fixed price - Small simple projects (< 2 months)









### DEVELOPMENT Phase starts


### Needed info & resources before development starts


Please makes sure that you have all needed answers from Estimate requirements section.


Info needed:




- On which Apple & GooglePlay account will we publish the app
- Which CI/CD solution will we use - Q’s or client’s
- Backend API specified - Ideally Swagger




Resources that are needed:




- Git repository location for the mobile project
- If project is ongoing we need an access to .p12 and APN keys for iOS
- If the project involves hardware and IOT:


  - Hardware and firmware that will be used
- Design screens made in Invision, Zeplin or Figma


  - With defined sizes, fonts and colours
- Image slices should be in .png format
- Fonts should be in .ttf or .otf format
- Image assets for App Icon and App Splash screen








Please refer to

Human Interface Guidelines | Apple Developer Documentation



for info about image sizes and style - iOS.

https://developer.android.com/guide/topics/graphics - Android


If we are going to use customer’s Appstore account, he should invite us at qmob@q.agency as App Maintainer with access to certificates. Full tutorial that you can share with a client is at: Guide for developer account on appstores



### Onboarding on the project





To be able to successfully onboard a mobile developer on the project following steps must be covered during the procedure:


- Join a kickoff meeting with the team lead (if needed) and the rest of the project team
- Team Lead and Project Manager should explain to you your responsibilities, procedures and rules
- With the help of a team lead you should check that the equipment needed for work has been delivered to you (employees only)
- You will be added to the Appstore/Google Play portal on which the apps are distributed
- You will be handed .p12 and APN keys
- You will be added to Bitrise CI/CD account
- Project manager will make sure that you have an access to the code repository
- Run through the setup processes and make sure that the app runs from the Master branch (unless differently specified)
- You should be added into Slack channel where all the communication regarding the dev team goes through
- Your mobile teammates, or project manager, will guide you through the specific tools, accounts setup, VPN, web apps, Slack channels and other things needed to start the work
- You should start logging your working hours the way it was explained by project manager





Employees should be issued equipment that is needed for them to do the work by Q. Contractors are expected to have their own equipment (unless differently specified).






### Needed info before we submit to the store





Please makes sure that you have all needed answers from Estimate requirements and Needed info & resources before development starts sections.


Before we submit the app to the stores, we need a few information from customer:


First three bullet points are needed to create the app on Appstore. Other points are needed before we make an actual store release.






- Company name


  - This will appear under your app name on your Store product page. If you have a trade name, DBA, or fictitious business name, enter it here. It can’t be changed later.
- App name


  - The name of your app as it will appear on the Store.
- App price


  - Is the app free or not?
- Age rating


  - Should the app be limited to people based on their age
- Manual or automatic release


  - This app version can be automatically released right after it has been approved by App Review.
  - You can also manually release it at a later date
- Primary language
- Privacy Policy URL


  - A URL that links to your privacy policy. A privacy policy is required for all apps.
  - An example: https://jenz.app/privacy/
- Subtitle


  - A summary of your app that appears below your app name
- The category that best describes this app


  - Categories and Discoverability - App Store - Apple Developer
- Promotional Text 


  - Promotional text lets you inform your Store visitors of any current app features without requiring an updated submission.
- Description


  - A description of your app, detailing features and functionality.
- Keywords


  - Include one or more keywords that describe your app. Keywords make store search results more accurate. Separate keywords with an English comma, Chinese comma, or a mix of both.
- Support URL 


  - A URL with support information for your app. This URL will be visible on the Store.
  - Ideally it would be a link to a support contact form, facebook page or FAQ, but a link to the app’s web space is good enough if that is all we have
- Marketing URL - optional


  - A URL with marketing information about your app. This URL will be visible on the Store.
  - A link to the app’s or company’s web space is good enough
- Copyright


  - “The name of the person or entity that owns the exclusive rights to your app, preceded by the year the rights were obtained (for example, "2008 Acme Inc."). Do not provide a URL.
- Contact information (name, last name, email, phone number)


  - The person in your organisation who should be contacted if the App Review team has any questions or needs additional information.
- Preview images for all mobile platforms






These questions are frequently asked by Apple during the review process, so its best to get them early just in case:






- Who is the target audience?
- Does your app access any paid content or services?
- Describe any paid content or services in the app and the payment methods used to pay for them.
- Do individual customers pay for the content or services or does a company purchase them for its users?
- Is this app meant for use in one company or for many client companies?
- Is this app meant for internal use (employees, partners, etc.) of one specific company?
- How do users obtain an account?
- Are there fees involved with creating an account?
- In which countries will this app primarily be distributed?


















Customer or Q design team should make store preview images.https://thetool.io/2019/app-store-google-play-screenshot-sizes-guidelines - a good overview of iOS and AndroidApp Previews - App Store - Apple Developer - iOShttps://appradar.com/blog/android-app-screenshot-sizes-and-guidelines-for-google-play - Androidhttps://www.launchmatic.app/platform/huawei-appgallery - Huawei



### FINISHING and the handover phase


TBD



## Internal Tools


### IDE


- Xcode - MANDATORY - IOS Xcode includes everything you need to create amazing apps for iPhone, iPad, Mac, and Apple Watch.
- Android Studio - Provides the fastest tools for building apps on every type of Android device.


### Text editors


- Atom - Atom is a modern and approachable text editor that is also hackable to the core. It's a tool you can customise to do anything but also use productively without ever touching a config file.
- VSCode - Visual Studio Code is a code editor redefined and optimised for building and debugging modern web and cloud applications.


### CLI Tools


- The Swift Package Manager - MANDATORY - IOS is a tool for managing the distribution of Swift code. It’s integrated with the Swift build system to automate the process of downloading, compiling, and linking dependencies.
- Cocoapods - CocoaPods is a dependency manager for Swift and Objective-C Cocoa projects. It has over ten thousand libraries and can help you scale your projects elegantly.
- Brew - the missing package manager for macOS.


### CI/CD


- Bitrise - MANDATORY Save time, money, and developer frustration with fast, flexible, and scalable CI/CD for mobile.
- Browserstack - App & Browser Testing Made Easy


### Source Control


- SourceTree - SourceTree is a free Mercurial and Git Client for Windows and Mac that provides a graphical interface for your Hg and Git repositories.


### Networking


- Charles - MANDATORY Charles is an HTTP proxy/HTTP monitor/Reverse Proxy that enables a developer to view all of the HTTP and SSL/HTTPS traffic between their machine and the internet. This includes requests, responses, and HTTP headers (which contain cookies and caching information).
- PushNotifications - a debug application for Apple Push Notification Service (APNS).
- Postman - build, test, and document your APIs faster.


### Design


- Sketch - professional digital design for Mac.
- Zeplin - design hand-off has never been easier. Automatically generate styleguides and resources.
- Invision - Create rich interactive prototypes


### Other


- SnippetsLab - be more productive with SnippetsLab. SnippetsLab is an easy-to-use code snippets manager. It helps you collect and organize valuable code snippets and makes sure that you have easy access to them whenever you need them.
- SwiftLint - MANDATORY - IOS A tool to enforce Swift style and conventions, loosely based on GitHub's Swift Style Guide.
- DevTools - MANDATORY - FLUTTER A suite of performance and debugging tools for Dart and Flutter. It’s currently in beta release, but is under active development.


Tools listed here are the ones that we use in our mobile team, on top of the tools that are used company wide (Slack, GitLab, etc). To see the list of tools that are used company wide, please visit Company wide tools.


In case a tool needs to be purchased, please contact your Team Lead.



## Tech Book of Standards


Book of standards section of our space covers all aspects of our day-to-day life as a mobile developer. This includes coding conventions, step-by-step explanation of project setup and our CI/CD solution, Gitflow and everything that can be standardised to make our lives easier and our projects better.


Overview:


- Environments


  - This section will explain what environments are and what kind of environments are going to be used in our projects.
- GitFlow


  - What does our git flow look like, which branches are used and what are the best git practices.
- Dependency management


  - We are covering mandatory dependency management tools for Swift, Android and Flutter.
- Project Environment setup


  - We will cover how our projects should be setup in order to cover all three environments.
- Coding standards


  - This section covers best coding practices for Swift, Android and Flutter.
- Libraries


  - This section lists all libraries that are stable and tested.
- CI/CD


  - What is Bitrise and how can we use it to make our development and distribution fast, stable and automated?


### Environments


There are three different environments that you'll deal with while developing mobile apps for Q. Each environment has its own properties and uses and it's important to use them accordingly.


As a mobile developer, you will come across the situation when you have a different setup for each environment for the reason that you have different:






- API keys
- Base URL
- App icons
- App name
- Debug logs
- Crash reporting link
- Analytics link
- Push notifications keys
- …






Base url is a bare minimum since all apps are connecting to backend.


I don’t think you will like to modify all these things every time to fit your chosen environment, you might forget to change something and suddenly your app doesn’t work properly, or you forget to modify Base URL and now your production app using Dev server, etc.


Environment encapsulates a project setup for purpose of development, testing and production. This way we don’t have to deal with live database when testing or developing.


CI/CD is closely tied with the environment. Depending on which branch we push the code, we are executing a different workflow. For example, if we use development workflow, we just run tests against the development backend. If we run a production workflow, we are distributing the application for testing and to the store. Please refer to CI/CD for more details about this topic.


QA and customer only have access to the final product of the build (staging and production) and should not be concerned with our workflows, branches or codebase.


Environments that must be used in every mobile project:






- Development
- Staging
- Production









Senior mobile developer on the project is responsible for environmental setup when starting with the project development.


If we inherit codebase from the client, we will setup environments retroactively.


We will not enforce the usage of these environments in situations where:*Codebase is shared with another company*Backend is not developed by Q*Customer is heavily involved in technical side of the project and does not agree with itWe will, however, advise the customer to adapt to this way of work if we see that it will improve the situation.



### Development







This env is used while we are under development of a new feature.


Ideally, backend feature list should tightly follow our mobile progress so there is no bottle neck.


If backend support for a current mobile feature is not ready, you are responsible for creating a local mockup version which can be used until backend is ready.


Please be sure to inform the project manager about the additional time needed for mockup creation.


### Staging


This env is used after a feature development is done and ready for internal and external testing. It points to the staging backend environment.


This is a much more stable version of the development environment.


Client tests here - idea is to deploy only stable versions or phases of the project here.






Feature support that should be tested must be ready on backend, we can’t use mockup at this stage.


### Production


This env is used by our applications that are LIVE on Appstore or GooglePlay. Before we publish our apps to the store, we must do a retest on a production environment. After QA is done with testing of the app that uses staging environment, and we are ready for a new release, we should make a release build that uses our Production environment. After QA is done with tests on Production environment, we should push our app to the store.

























### GitFlow


Git is used company wide as a version control system.


If customer is not demanding differently, we are using Gitlab as repository.


Team Lead is responsible for creation of repositories for new projects.





### 1. Branches, Tags, Commits & Versioning


#### 1.1. Branches


Our GitFlow is based in two main branches: 


- master — this branch contains most recent stable code. It is the only branch with infinite timeline. release_v* is synced with master every time a feature is merged to release_v*. master is tagged with live_v*_b* (example: live_v1.0.0_b7, where 1.0.0 is version number, and 7 is a build number) at the moment when our build has been live on stores. Since all our live versions will be tagged, it is easy to navigate trough them. Hotfix is done by branching from a live tag. This branch must be protected.
- release_v* — example: release_v1.0.0. This branch is created from master at the time of starting a new release and is named in a way to include release version number in a name. This branch contains pre-production code. Day to day work should be done on feature branches. When features are finished then they are merged into release_v*. Merging is done via pull request. In general, there should only be one or a few commits added to release_v* from each feature branch. To achieve this, squash multiple commits into one or a handful of commits with more elaborate messages for each one. Make sure that the code you merge to this branch is tested and working. This branch must be protected.


During the development cycle, a variety of supporting branches are used:


- feature_<feature_name> — feature branches are used to develop new features for the upcoming release. May branch off from release_v* and must merge into release_v* and master. Most of the day-to-day work is done on them. Feature branches must be deleted after release is successful so we have a clean state.
- bugfix_<bugfix_name> — bugfix branches are necessary to act upon an undesired status of release_v*. May branch off from release_v* and must merge into release_v* and master. They are used when fixing bugs in QA phase before we are ready to release a new version. Bugfix branches must be deleted after release is successful so we have a clean state.
- hotfix_<hotfix_name> — hotfix branches are necessary to act immediately upon an undesired status of live version of the application. May branch off from master and must merge into master and release_v*. Hotfix branches must be deleted after release is successful so we have a clean state.


Branch naming:






Prefix




Example






feature




feature_adding_login_ui






release




release_v1.0.0






bugfix




bugfix_removing_wrong_font






hotfix




hotfix_crash_on_login






Tags naming:






Format




Example for version 1.0.0 and build 7:






dev_v*_b*




dev_v1.0.0_b7






stage_v*_b*




stage_v1.0.0_b7






prod_v*_b*




 prod_v1.0.0_b7






live_v*_b*




live_v1.0.0_b7






master and release_* branches must be protected to enforce developers to use pull requests when adding new features.


release_* branches are created by senior mobile developer every time we are ready to start a new release (sprint).


Tags should be annotated and done only on release_*, master and hotfix_*.


Version number and Build number must be done by hand inside of the project and must be the same as version&build number that are inside the branch and tag names.


Working on a task:





Gitflow example:





#### 1.2. Tags


Tags are used for triggering our CI/CD system (Bitrise):


- dev_v*_b* - example: dev_v1.0.0_b7. When we push this type of TAG, we are automatically triggering distribute_dev workflow on Bitrise which builds and distributes dev version of the the app that is connected to dev environment. This is done on release_v* branch when we are ready for internal QA.





- stage_v*_b* - example: stage_v1.0.0_b7. When we push this type of TAG, we are automatically triggering distribute_stage workflow on Bitrise which builds and distributes staging version of the the app that is connected to staging environment. This is done on release_v* branch when we are ready for client QA or a DEMO. You can also look at this environment as our UAT.





- prod_v*_b* - example: prod_v1.0.0_b7. When we push this type of TAG, we are automatically triggering distribute_prod workflow on Bitrise which builds and distributes production version of the the app that is connected to production environment. This is done on:


  - release_v* branch when we are ready for final test of our app before we push it to the appstore.
  - hotfix-* branch when we are fixing a production bug.





- live_v*_b* - example: live_v1.0.0_b7. This tag is used on master at the moment of our app going live (appstore review done). Its very helpful to have all our live app releases tagged. On of the reasons are hotfixes and ability to revert to one of previous live versions. This tag does not trigger anything on CI/CD.


Make sure to push TAGS as annotated (non-lightweight).


#### 1.3. Commits


Our CI/CD automatically generates release logs by using commit messages between last two TAGs.


In order for our CI/CD to parse our commit messages (and ignore autogenerated “junk” commit messages), they must be written in format:


- ID-<TASK_NUMBER>: <Short task description> , where <TASK_NUMBER> is an id of Teamwork task that you are working on. This way QA can see what tasks are done in which release.


  - Example: ID-12313231: Login UI


If you are working on something that is not a part of a teamwork task (chores, cleanup, etc), you can write a commit message as such:


- ID-0: Cleanup


This way we will tell our CI/CD to print this on release logs. 0 tells our QA that this commit is not connected to any Teamwork tasks.


If you don’t want for your commit message to be a part of release logs, just write it as an ordinary message without adhering to our ID-<TASK_NUMBER>: <Short task description> format.


#### 1.4. Versioning


We use Semantic Versioning 2.0.0 for versioning.


Basically MAJOR.MINOR.PATCH:


- MAJOR - Dramatic changes take place for your application. This could be a complete visual redesign, an overhaul of the code or a change in the backend systems that drive the experience.
- MINOR - When you add/remove normal-sized functionality. This one will be changed most often.
- PATCH - This one is incremented if something trivial changes or if bugfix is the main reason to make this release. Hotfixes on production should always be marked by incrementing this number.


Build number is incremented every time we make a new build for internal testing.


After internal testing (dev) is done, we move on to staging and finally to prod with the same build number.


Version and build number are always changed by hand before pushing TAG that starts internal testing.


It must be the same on iOS, Android and Huawei apps.


### 2. Git practices






- Make clean, single-purpose commits and write meaningful commit messages.
- Git works best when you commit your work often. Instead of waiting to make the commit perfect, it is better to work in small chunks and keep committing your work. If you are working on a feature branch that could take some time to finish, it helps you keep your code updated with the latest changes so that you avoid conflicts.
- Syncing your feature branch with release should be done often.
- Use pull requests when merging feature branch to release_v* since our CI/CD can listen to that git action and start its workflow.
- Once a commit has been merged to an upstream default branch (and is visible to others), do not alter published history.
- Don’t commit generated files like CocoaPods etc. Generally, only those files should be committed that have taken manual effort to create, and cannot be re-generated.
- Prune your remote tracking branches (git remote update --prune)


This will get rid of any branches that were deleted upstream since you cloned/pruned. It normally isn’t a major problem one way or another, but it might lead to confusion.
- Check your stash for forgotten work (git stash list)


If you don’t do it very often, the context for the stashed work will be forgotten when you finally do stumble on it, creating confusion.







Before the end of a working day, commit and push off the days work is mandatory even if its WIP.


https://www.toptal.com/developers/gitignore is a good source of default .gitignore files that can be modified for your need.


master and release_v* must always be runnable and buildable AS-ISIf any setup and generation is needed, it must be explained in README.md.


Pull requests must be approved by a senior mobile developer.



### Dependency management


### 1. iOS - Swift Package Manager


The Swift Package Manager is natively integrated into Xcode and should be primarily used for all iOS projects.


Exceptions are if a project is already using CocoaPods and its not trivial to change to SPM or if a third party library can’t be found on SPM.











#### 1.1 CocoaPods


Given it is a tool not in Xcode, it must be installed separately.


Please be sure to always use the latest CocoaPods version and to refresh the Podfile with updated versions of libraries before every new release.


Make sure to add Pods folder to .gitignore so we don’t upload generated files to the repository.





For installation, refer to**

https://guides.cocoapods.org/using/getting-started.html


#### 2. Android - Gradle


In Android side, things are simpler, as it’s main IDE Android Studio is actually IntelliJ that has uses Gradle as it’s dependency management within.


No additional installation is needed, nor setup. Once you setup the Android project, your Gradle file is all setup accordingly. You just need to add your dependency there and sync it.


Add your dependencies in your app’s build.gradle.


In your app’s build.gradle, there’s a section dependencies as shown below.





```

dependencies {    implementation fileTree(dir: 'libs', include: ['*.jar'])    // ... a lot other dependencies ..    implementation 'com.squareup.okhttp3:okhttp:3.12.0'    implementation 'com.google.code.gson:gson:2.8.5'}

```


Just add your library here as per in bold above, in this case okhttp (Android network library) and gson (Android google provided JSON processing).


It’s important to note the file above is the app module’s build.gradle and not the project’s build.gradle. (i.e. the project root directory build gradle file)


After you edit the build.gradle file, a special prompt will appear on top of the file.


Just press the Sync Now and it will automatically sync the dependencies down.















#### 3. Flutter


Dependencies are one of the core concepts of the pub package manager. A dependency is another package that your package needs in order to work.


Dependencies are specified in your pubspec.


Actively manage your dependencies and ensure that your packages use the freshest versions possible.


Use caret syntax. Specifying dependencies with version ranges is such as ^1.6.3 is a good practice.


Depend on the latest stable package versions


Use pub upgrade to update to the latest package versions that your pubspec allows. To identify dependencies in your app or package that aren’t on the latest stable versions, use pub outdated.


Test whenever you update package dependencies. If you run pub upgrade without updating your pubspec, the API should stay the same and your code should run as before — but test to make sure. If you modify the pubspec and update to a new major version, then you might encounter breaking changes, so you need to test even more thoroughly.



















### Project Environment setup


Every project must use development, staging and production environments which are described at the start of this document.


# 1. iOS


We will use .xcconfig files for differentiating environments.


#### 1.1 Configurations


Each of environments will have a corresponding configuration, debug and release.


In the Navigator Area, select the project file (the top-most file). Then, from within the Editor Area, make sure the project is selected as well as the Info tab. Take a look at the Configurations section.


Since we’ll have three environments, each with a Debug and Release configuration, we’ll create the following:









- Debug (Development)
- Debug (Staging)
- Debug (Production)
- Release (Development)
- Release (Staging)
- Release (Production)









Select the + icon at the bottom of the Configurations section and Duplicate “Debug” Configuration.


Repeat this and rename the existing Configurations until you have the following:
















.xcconfig files are supplemental files that aid in configuring a specific build type.


#### 1.2 Schemes


Xcode projects also come with one scheme by default that’s named after the project. We’ll have one scheme per environment.


From the Xcode toolbar, head to the Scheme selector. Open the Scheme pop-up menu and select Manage Schemes…


Click the current scheme, and at the bottom, click the cog to open the settings pop-up Select Duplicate.


This scheme we’re creating will be the Development scheme.


Ensure that the appropriate configuration is set for each action like:





Create another scheme for Staging and ensure the correct configurations are set as well. Finally, verify that the default scheme is using Production configurations.


Make sure all Schemes are marked as Shared so that they are not strictly local to only your own Xcode environment, but available project-wide. 


You should have something like this when done:





If using CocoaPods, be sure to choose Workspace as a Scheme container.


An Xcode scheme defines a collection of configurations to use when building, as well as tests to execute and a collection of targets to build.


#### 1.3 Creating xcconfig files


Create the xcconfig files our Configurations will be using. Within the Config folder, add a new file and select the Configuration Settings File.


Name the file Development, and ensure that no Target is selected. Repeat the above steps for Staging and Production.


These files are used to store key-value pairs of settings. Our keys will be xcconfig variables. Variables are assigned in xcconfig files using the = operator after a variable name, such as MY_FLAG = bar (whitespace will be ignored on either side of the equals sign). In our example, each environment will have a different ROOT_URL, API_KEY , APP_NAME and BUNDLE_IDENTIFIER.


Here’s what Development.xcconfig looks like:


```

// Development.xcconfig// Server URLROOT_URL = http:/$()/www.development.mytestapp.com
// KeysAPI_KEY = 783u9djd8a_hkzos7jd803001nd
// App SettingsAPP_NAME = MyTestApp (dev)APP_BUNDLE_ID = com.thoughtbot.MyTestApp.dev

```






![](blob:https://q-agency.atlassian.net/53dc72c3-edc4-43bb-9b64-f62f19958e67#media-blob-url=true&id=29737ada-6d87-4c2c-ab37-559428ca127f&collection=contentId-17007413&contextId=17007413&mimeType=image%2Fpng&name=config2.png&size=165068&width=893&height=499&alt=)

Repeat the above for **Staging** and **Production** environments and change the variable values.




You may have noticed some strangeness with the ROOT_URL formatting. This is due to the way characters are escaped in xcconfig files. In order to have the // in https://, we need to split it with an empty variable substitution via $().





#### 1.4 Setting xcconfig files for Configurations


Now that we have our xcconfig files set up, we need to set the appropriate file for each Configuration we created previously.







- Delete the .xcworkspace file
- Delete the Podfile.lock file and Pods/ directory
- Keep the Podfile
- Rerun pod install



CocoaPods note for existing projects: If you’re using CocoaPods with an existing project and want to follow along, you’ll have to do a tiny bit of extra work to have it set up as CocoaPods has it’s own xcconfig files.


You’ll see in Terminal that CocoaPods did not set the configuration since we already set custom configurations. CocoaPods provides a link to be included in each



- Open new .xcworkspace
- Include .xcconfig path for CocoaPods in your .xcconfig files by prepending an #include statement like the following: #include “Pods/Target Support Files/Pods-MyTestApp/Pods-MyTestApp.release.xcconfig”



#### 1.5 Accessing configuration values


##### 1.5.1 From project settings


To actually use our new configuration settings for our project, let’s begin with editing the Info.plist.


If you intend each environment to have a different APP_NAME and APP_BUNDLE_ID. You can use variable substitution in the .plist for the appropriate keys, substituting your custom variables from the xcconfig files. For example we can change Bundle name‘s value to $(APP_NAME) and Bundle Identifier to $(APP_BUNDLE_ID).


##### 1.5.2 From code


Since Xcode projects don’t include a ROOT_URL or API_KEY key in the plist by default, we’ll have to add those two new entries of String type. 


Now that these variables are in our plist, we can access them from Swift. 


One recommended way of doing so is creating an Environment.swift file and add it to the Configs fold


```

// Environment.swift
import Foundation
public enum Environment {  // MARK: - Keys  enum Keys {    enum Plist {      static let rootURL = "ROOT_URL"      static let apiKey = "API_KEY"    }  }
  // MARK: - Plist  private static let infoDictionary: [String: Any] = {    guard let dict = Bundle.main.infoDictionary else {      fatalError("Plist file not found")    }    return dict  }()
  // MARK: - Plist values  static let rootURL: URL = {    guard let rootURLstring = Environment.infoDictionary[Keys.Plist.rootURL] as? String else {      fatalError("Root URL not set in plist for this environment")    }    guard let url = URL(string: rootURLstring) else {      fatalError("Root URL is invalid")    }    return url  }()
  static let apiKey: String = {    guard let apiKey = Environment.infoDictionary[Keys.Plist.apiKey] as? String else {      fatalError("API Key not set in plist for this environment")    }    return apiKey  }()}

```


### 2. Android


Gradle uses product flavors to create different product versions of the app. It also uses build types to apply different build and packaging settings to each product version. Each product flavor and build type combination forms a build variant. The build system thus generates a different APK for each build variant of app.


Define all product flavors: development, staging and production in build.gradle.


Define end points, prefixes and any other flavor dependent strings as a “buildConfigField” in each flavour separately, as shown below:


```

def final appName = ‘MyApp’def final myApplicationId = ‘com.example.android’productFlavors {  development {    applicationId myApplicationId + “.dev”    buildConfigField “String”, “HOST”, “\”http://dev.example.com\““    buildConfigField ‘String’, ‘URL_PREFIX’, “\”devapi\”“    resValue “string”, “app_name”, appName + “-Dev”  }  staging {    applicationId myApplicationId + “.staging”    buildConfigField ‘String’, ‘HOST’, ‘”http://staging.example.com“‘    buildConfigField ‘String’, ‘URL_PREFIX’, “\”stagingapi\”“    resValue “string”, “app_name”, appName + “-Staging”  }  production {    applicationId = myApplicationId    buildConfigField ‘String’, ‘HOST’, “\”http://www.example.com\““    buildConfigField ‘String’, ‘URL_PREFIX’, “\”api\”“    resValue “string”, “app_name”, appName  }}

```


During build process, android auto generates a BuildConfig file where all config fields defined in build.gradle for a specific flavor are auto initialized.Hostname can be accessed from this file as below:public static final String hostname = BuildConfig.HOSTpublic static final String loginUrl = hostname + “/login”;


Use flavor specific build commands to generate a flavored apk. Product flavor along with build type can generate various build variants.


By default, debug and release build types are provided. So, the build variants can be:






- devDebug
- devRelease
- stagingDebug
- stagingRelease
- productionDebug
- productionRelease






If you run the command assembleProductionDebug, it will generate “app-production-debug.apk” instead of “app-debug.apk”. Thus there will be a different apk for each flavor.





#### 3. Flutter (Dart)


The way we are going to manage different environments on Dart side is to declare 3 different entry points, one per flavor. By default, the Flutter entry point is the lib/main.dart file but you can override it :


```

flutter build --flavor staging -p lib/main_dev.dart

```


Rename the lib/main.dart to make sure you no longer use it.


Create an abstract class that represents the environment.


```

abstract class EnvInterface {  String appTitle;}

```





Create one class per flavor that implements the environment contract.




```

import 'package:bz_bitrise_sample/environments/env_interface.dart';
class DevEnv implements EnvInterface {  @override  String appTitle = 'Dev app title';}

```


Create an InheritedWidget to make the environment available to all widgets in the application (children widgets).


```

import 'package:bz_bitrise_sample/environments/env_interface.dart';import 'package:flutter/material.dart';
class Env extends InheritedWidget {  final EnvInterface _env;
  const Env(    this._env, {    Key key,    @required Widget child,  })  : assert(child != null),        super(key: key, child: child);
  EnvInterface get env => _env;
  @override  bool updateShouldNotify(Env old) => false;
  static Env of(BuildContext context) {    return context.inheritFromWidgetOfExactType(Env) as Env;  }}

```


Create one entry point per flavor.


```

import 'package:bz_bitrise_sample/environments/dev.dart';import 'package:bz_bitrise_sample/environments/widgets/env.dart';import 'package:bz_bitrise_sample/my_app.dart';import 'package:flutter/material.dart';
void main() => runApp(app);
var app = Env(  DevEnv(),  child: MyApp(),);

```





You can get the title from environment context.


Env envContext = Env.of(context);


Modify your application runners in your IDE (AndroidStudio, IntelliJ, VSCode, …) and in your XCode config files.


Example for staging env in iOS XCode config file:


```

////  staging.xcconfig
#include "Pods/Target Support Files/Pods-Runner/Pods-Runner.debug.xcconfig"#include "Generated.xcconfig"
FLUTTER_TARGET=lib/main_staging.dart
APP_NAME = MyTestApp (Staging)APP_BUNDLE_ID = com.thoughtbot.MyTestApp.staging

```








### 4. Analytics and crash logging


Firebase integration is mandatory for all three technologies.


Two libraries that are mandatory are:






- Firebase Analytics MANDATORY


  - Free app measurement solution that provides insight on app usage and user engagement.
  - It is mandatory to at least add firebase analytics library, create firebase project and cover all view visits.
  - It is also mandatory to cover all networking calls and report if a call fails and what the reason is.
  - Additional measures can be added if needed.
  - https://firebase.google.com/docs/analytics/get-started
- Firebase Crashlytics MANDATORY


  - Firebase Crashlytics helps you track, prioritise, and fix stability issues that erode app quality, in realtime.
  - It is mandatory to at least add firebase crashlytics library, create firebase project and make sure that crash reporting works.
  - https://firebase.google.com/docs/crashlytics
















### Coding standards


### 1. Best coding practices






- Always try to fix every single warning


  - There is a reason that warnings exists, but you should never leave any of them in your production code.
- Avoid big one file classes, mainly controllers


  - If you get to this point, you can try to refactor your code by introducing a new object that can take over some of the functionality from your controller class.
- Use controllers for controlling and move the business logic outside of the them


  - Use business services, Models, ViewModels or Entities to handle business logic (depending on design pattern)
- Do not reinvent the wheel


  - Always do a research to see if a problem has been solved in a way that suits you.
- Only use singletons if necessary


  - You can use a singleton if you are especially looking for shared states, like cache mechanisms or a local storage object. Otherwise don't use a singleton.
- Do not create helpers (or managers)


  - If you need a helper class, you are doing things wrong! Every single object has it's own place in your codebase, helpers are useless & not good for anything.
- Avoid side effects & global state


  - Going functional is a neat way to improve your code.
  - Avoid static methods
- Use meaningful names


  - The name of a variable, function, or class, should answer all the big questions. It should tell you why it exists, what it does, and how it is used. If a name requires a comment, then the name does not reveal its intent.
- Follow the camel case naming convention


  - Methods should be verbs in lowerCamelCase or a multi-word name that begins with a verb in lowercase; that is, with the first letter lowercase and the first letters of subsequent words in uppercase.
  - Local variables, instance variables, and class variables are also written in lowerCamelCase.
  - Class names must be in UpperCamelCase
- Fewer arguments


  - We always need to write methods in such a way that the number of arguments is as minimal as possible.
- Reduce the size of methods


  - Most of your methods should only need to be a less than 20 lines long.
- Eliminate case analysis


  - Avoid testing to see if an object is an instance of a particular class.
- Eliminate implicit parameter passing


  - Many times, the attribute that is shared should be passed as a parameter of the method instead of directly accessing the attribute.
- Minimise accesses to variables


  - Formalises the principles of data hiding. Try not to expose class attributes to other classes, but protect them by methods.
- Separate creational logic from business logic


  - Business logic should never be coded into constructors of an object.
- Follow the Single Responsibility Principle


  - Every class and method should have one and only one axis of change.
- Encapsulate data and behaviour


  - Information-hiding mechanism used to hide the values or state of a structured data object.
  - Also, encapsulation is gathering all operations on the object’s state into the object’s interface, and only those operations.
- Don’t Repeat Yourself


  - Aim at reducing repetition of software patterns, replacing it with abstractions or using data normalisation to avoid redundancy.
- Comments


  - When they are needed, use comments to explain why a particular piece of code does something.
  - Comments must be kept up-to-date or deleted.
- No hardcoding!


  - Hard coding is bad because it assumes that information which should be flexible is actually fixed and unchanging.
  - The main problem with hard code is that it only works properly in a certain environment, and at any time the conditions change, we need to modify the source code, usually in multiple separate places.
- Careful softcoding


  - Beware that in extreme cases, a soft coded program can become so abstract and convoluted that it is almost impossible to comprehend it (especially for new team members), and extremely hard to maintain and debug.
- Comments!


  - Are mandatory! Even when a method or a class is self-explanatory.
- Use static code analysis tool


  - Please refer to iOS, Android and Flutter sections below for more information about their corresponding tools

















Requirements in this section will be “enforced” by using lint tools as part of our CI/CD Bitrise workflow steps. If static code analysis fails, workflow fails and merge request is not approved. Since our development branch is protected, there will be no way to push code without a successful merge request.





### 1.1 iOS


- Use type inferred context


  - Use compiler inferred context to write shorter, clear code.


    - Preferred:


```

let selector = #selector(viewDidLoad)view.backgroundColor = .redlet toView = context.view(forKey: .to)let view = UIView(frame: .zero)

```


Not Preferred:


```

let selector = #selector(ViewController.viewDidLoad)view.backgroundColor = UIColor.redlet toView = context.view(forKey: UITransitionContextViewKey.to)let view = UIView(frame: CGRect.zero)

```


Generics


- Generic type parameters should be descriptive, upper camel case names. When a type name doesn’t have a meaningful relationship or role, use a traditional single uppercase letter such as T, U, or V.


  - Preferred:


```

struct Stack<Element> { ... }func write<Target: OutputStream>(to target: inout Target)func swap<T>(_ a: inout T, _ b: inout T)

```


Not Preferred:


```

struct Stack<T> { ... }func write<target: OutputStream>(to target: inout target)func swap<Thing>(_ a: inout Thing, _ b: inout Thing)

```


- Language


  - Use US English spelling to match Apple’s API.


    - Preferred:


let color = “red”


Not Preferred:


let colour = “red”
- Extensions


  - Use extensions to organise your code into logical blocks of functionality. Each extension should be set off with a // MARK: – comment.
- Protocol Conformance


  - When adding protocol conformance to a model, prefer adding a separate extension for the protocol methods.
- Unused code


  - Unused (dead) code, including Xcode template code and placeholder comments should be removed.
- Minimal Imports


  - Import only the modules a source file requires. For example, don’t import UIKit when importing Foundation will suffice.
- Spacing


  - Indent using 2 spaces rather than tabs
  - Method braces and other braces (if/else/switch/while etc.) always open on the same line as the statement but close on a new line.
  - There should be no blank lines after an opening brace or before a closing brace.
  - Long lines should be wrapped at around 70 characters.
  - Avoid trailing whitespaces at the ends of lines.
  - Add a single newline character at the end of each file.
- Comments


  - Avoid the use of C-style comments (/* … */). Prefer the use of double- or triple-slash.
- Be aware of when to use classes and when structs
- Use of Self


  - Avoid using self since Swift does not require it to access an object’s properties or invoke its methods.
- Function declarations


  - Keep short function declarations on one line including the opening brace
  - For functions with long signatures, put each parameter on a new line and add an extra indent on subsequent lines
  - Don’t use (Void) to represent the lack of an input; simply use (). Use Void instead of () for closure and function outputs.
  - Preferred:


```

func updateConstraints() -> Void {  // magic happens here}typealias CompletionHandler = (result) -> Void

```


Not Preferred:


```

func updateConstraints() -> () {  // magic happens here}typealias CompletionHandler = (result) -> ()

```


- Types


  - Always use Swift’s native types and expressions when available.
- Type Inference


  - Prefer compact code and let the compiler infer the type for constants or variables of single instances.
  - Preferred:


```

let message = “Click the button”let currentBounds = computeViewBounds()var names = [“Mic”, “Sam”, “Christine”]let maximumWidth: CGFloat = 106.5

```


Not Preferred:


```

let message: String = “Click the button”let currentBounds: CGRect = computeViewBounds()var names = [String]()

```


Ternary Operator


- Preferred:


```

let value = 5result = value != 0 ? x : ylet isHorizontal = trueresult = isHorizontal ? x : y

```


Not Preferred:


```

result = a > b ? x = c > d ? c : d : y

```


- Guards


  - Don’t nest if statements. Multiple return statements are OK. The guard statement is built for this.
- Semicolons


  - Swift does not require a semicolon after each statement in your code so don’t use them.
- Parentheses


  - Preferred:


```

if name == "Hello" {  print("World")}

```


Not Preferred:


```

if (name == "Hello") {  print("World")}

```


- - In larger expressions, optional parentheses can sometimes make code read more clearly.
- No Emoji
- Organisation and Bundle Identifier


  - The organisation should be set to Q Agency and the Bundle Identifier set to agency.q.appName for production, agency.q.appName.staging for staging and agency.q.appName.dev for dev environment
  - If customer decides to use its own company name, use it instead
- Don’t use Interface builder to input label text
- All strings in the app should be localised via .strings files


Unless its an old Objective C project, we will be using Swift as a programming language.


Since UI development can be done in a variety of ways (in code, Xibs, Storyboards, swiftUI) we will not enforce one way over the other.Important thing to have in mind is to use the right approach for any given problem (project). If a whole app can be nicely organised in one storyboard, then use it.


If using Storyboards, make sure to separate the project to smaller modules where every Storyboard covers one module (Login for example). Connect Storyboards via Storyboard References. Avoid merge conflicts by working on dedicated storyboards. Every developer should only work on storyboards that are assigned to him.


SwiftLintA tool to enforce Swift style and conventions, loosely based on GitHub's Swift Style Guide.SwiftLint Q config file should be saved at the project's root folder as .swiftlint.yml.GitHub - realm/SwiftLint: A tool to enforce Swift style and conventions.


Lint file that should be used:


CopyRightThe following copyright statement should be included at the top of every source file:


```

//  <FILENAME>.swift//  <PROJECT NAME>////  Created by <YOUR NAME> on DD/MM/YYYY.//  Copyright © 2020 Q Agency. All rights reserved.

```


### 1.2 Android






- Use Expressions


  - Every time you write an if consider if it can be replaced with a more concise when expression.
- Structure


  - A .kt file comprises the following, in order:


    - Copyright and/or license header (optional)
    - File-level annotations
    - Package statement
    - Import statements
    - Top-level declarations


Exactly one blank line separates each of these sections.
- Import statements


  - Import statements for classes, functions, and properties are grouped together in a single list and ASCII sorted.
  - Wildcard imports (of any type) are not allowed.
  - Similar to the package statement, import statements are not subject to a column limit and they are never line-wrapped.
- Braces


  - Braces are not required for when branches and if statement bodies which have no else if/else branches and which fit on a single line.
  - Braces follow the Kernighan and Ritchie style ("Egyptian brackets") for nonempty blocks and block-like constructs
- Expressions


  - An if/else conditional that is used as an expression may omit braces only if the entire expression fits on one line.
- One statement per line


  - Each statement is followed by a line break. Semicolons are not used.
- Enum classes


  - An enum with no functions and no documentation on its constants may optionally be formatted as a single line.
- Package Names


  - Package names are all lowercase, with consecutive words simply concatenated together (no underscores).
- Class names


  - Written in PascalCase and are typically nouns or noun phrases.
- Function names


  - Written in camelCase and are typically verbs or verb phrases.
- Constant names


  - Constant names use UPPER_SNAKE_CASE
- Non-constant names


  - Written in camelCase
- Backing properties


  - Name should exactly match that of the real property except prefixed with an underscore.







Whenever possible, we will use Kotlin for Android development.


The Lint toolWhen using Android Studio, configured lint and IDE inspections run whenever you build your app.https://developer.android.com/studio/write/lint


### 1.3 Flutter


If we are working on a bigger project with more than one developer at the same time, please consider using Bloc pattern.




- Avoid large trees


  - You should split your code into different Widgets based on encapsulation but also on how “it changes”
- Don't use absolute positioning
- Use widgets to build UI elements


  - instead of _buildXXX (methods)
- Use packages only when necessary
- Controlling build() cost


  - Avoid repetitive and costly work in build() methods
- Apply effects only when needed


  - Use the Opacity widget only when necessary
  - Be aware to to avoid calls to saveLayer() when possible
- Render grids and lists lazily
- Be aware of Apps size and try to make it optimal
- Aim for optimal performance on UI front
- Use Widget Builder
- Use const Widgets


  - Whenever you have widgets that don’t change when the state changes, you should declare them as constants.
- Remove unused Resources


  - Especially when you’re ready to publish your application
- Use trailing commas


  - Since your widget tree can grow quickly, you need a way to format your code in a way that makes it easy to read.
- Keep your colours and styles in a separate file
- Use theme when possible


  - instead of adding the same colour to every button
- Have a file for each page/route




Use integrated static analysis.Customizing static analysis


## Libraries


The libraries that are listed here are STRONGLY suggested and very well tested.


Whenever we stumble upon a new library and find it to be a great match, we will include it here.


If we find a better library for solving a particular task, we will replace the old one since there is no point in having more than one library with the same purpose.


The following list is constantly under change and should be frequently visited.


To streamline usage of our own Q packages, please login to our GitLab account from XCode.


### 1. iOS


If Apple releases a new framework that replaces the purpose of existing third party library, we will stop using that library.


For example, since we have Codable protocol, we can ignore third party libraries that support JSON parsing and mapping.


- Q SwiftNetworkMapper - MANDATORY WITH Q BACKEND


  - Q Swift network wrapper that should enrich our backend calls with Q specific headers and handles Q specific responses.
  - https://gitlab.q-software.com/mobile/swift_packages/swift-network-wrapper
- IQKeyboardManager


  - IQKeyboardManager allows you to prevent this issue of keyboard sliding up and covering UITextField/UITextView without needing you to write any code or make any additional setup.
  - Use it for solving various problems that arise when using a keyboard
  - GitHub - hackiftekhar/IQKeyboardManager: Codeless drop-in universal library allows to prevent issues of keyboard sliding up and cover UITextField/UITextView. Neither need to write any code nor any setup required and much more.
- KeyChain Access


  - Makes using Keychain APIs extremely easy and much more palatable to use in Swift.
  - Please use this for saving sensitive data
  - GitHub - kishikawakatsumi/KeychainAccess: Simple Swift wrapper for Keychain that works on iOS, watchOS, tvOS and macOS.
- SwiftDate


  - Definitive toolchain to manipulate and display dates and time zones.
  - GitHub - malcommac/SwiftDate: 🐔 Toolkit to parse, validate, manipulate, compare and display dates, time & timezones in Swift.
- KingFisher


  - Kingfisher is a powerful, pure-Swift library for downloading and caching images from the web.
  - GitHub - onevcat/Kingfisher: A lightweight, pure-Swift library for downloading and caching images from the web.
- RxSwift


  - Use If going the reactive programming road
  - GitHub - ReactiveX/RxSwift: Reactive Programming in Swift
- RealmSwift


  - Realm Swift enables you to efficiently write your app’s model layer in a safe, persisted and fast way.
  - This should be a go-to way of persisting organised data.
  - https://realm.io/docs/swift/latest/
- Alamofire


  - Alamofire is an HTTP networking library written in Swift.
  - Use it in combination with Codable for mapping JSON to Object.
  - GitHub - Alamofire/Alamofire: Elegant HTTP Networking in Swift
- Lottie


  - Lottie loads and renders animations and vectors exported in the bodymovin JSON format.
  - Bodymovin JSON can be created and exported from After Effects with bodymovin, Sketch with Lottie Sketch Export, and from Haiku.
  - GitHub - airbnb/lottie-ios: An iOS library to natively render After Effects vector animations
- OHHTTPStubs


  - Library designed to stub your network requests very easily. It can help you:


    - test your apps with fake network data (stubbed from file) and simulate slow networks, to check your application behavior in bad network conditions
    - write unit tests that use fake network data from your fixtures.
    - GitHub - AliSoftware/OHHTTPStubs: Stub your network requests easily! Test your apps with fake network data and custom response time, response code and headers!
- SwiftyBeaver


  - Colorful, flexible, lightweight logging
  - GitHub - SwiftyBeaver/SwiftyBeaver: Convenient & secure logging during development & release in Swift 4 & 5


Please note that Apple released Combine framework which pretty much replaces RxSwiftRxSwift will be used until we move deployment target to iOS 13.


We are in the middle of testing a very promising networking library. It is built on top of Combine framework.GitHub - freshOS/Networking: ⚡️ Concise networking code leveraging async-await, Decodable & Generics.It brings together URLSession, Combine, Decodable and Generics to make connecting to a JSON api a breeze.If tests show us that its a good match, we will replace AlamoFire with it as soon as we move deployment target to iOS 13.


### 2. Android


If possible and suitable, use Android JetPack and Architecture Components since they are developed by Google.




- Android Jetpack (AndroidX)


  - Android Jetpack is a suite of libraries, tools, and guidance to help developers write high-quality apps easier.
  - https://developer.android.com/jetpack
  - GitHub - androidx/androidx: Development environment for Android Jetpack extension libraries under the androidx namespace. Synchronized with Android Jetpack's primary development branch on AOSP.
- Architecture Components


  - Android architecture components are a collection of libraries that help you design robust, testable, and maintainable apps.
  - https://developer.android.com/topic/libraries/architecture/
- RxJava


  - Java VM implementation of Reactive Extensions (Rx): a library for composing asynchronous and event-based programs by using observable sequences.
  - GitHub - ReactiveX/RxJava: RxJava – Reactive Extensions for the JVM – a library for composing asynchronous and event-based programs using observable sequences for the Java VM.
  - GitHub - ReactiveX/RxKotlin: RxJava bindings for Kotlin
- Retrofit


  - Retrofit is a type-safe REST client. It turns an HTTP API into a Java interface, and makes it easy to consume JSON or XML data which is parsed into Plain Old Java Objects (POJOs).
  - GitHub - square/retrofit: A type-safe HTTP client for Android and the JVM
- Moshi


  - Library used to easily serialize and deserialize Java objects into/from JSON data.
  - GitHub - square/moshi: A modern JSON library for Kotlin and Java.
- Glide


  - Framework for fetching, decoding, and displaying images and animated GIFs from remote sources.
  - GitHub - bumptech/glide: An image loading and caching library for Android focused on smooth scrolling
- Lottie


  - Library for Android, iOS, Web, and Windows that parses Adobe After Effects animations exported as JSON and renders them natively.
  - GitHub - airbnb/lottie-android: Render After Effects animations natively on Android and iOS, Web, and React Native
- Timber


  - Logger with a small, extensible API which provides utility on top of Android's normal Log class.
  - GitHub - JakeWharton/timber: A logger with a small, extensible API which provides utility on top of Android's normal Log class.
- Realm


  - Realm is a mobile NoSQL database designed specifically for use on mobile platforms.
  - GitHub - realm/realm-java: Realm is a mobile database: a replacement for SQLite & ORMs
- Dagger 2


  - Is a compile-time annotation-based DI framework.
  - GitHub - google/dagger: A fast dependency injector for Android and Java.
- Koin


  - Lightweight, Kotlin-based service locator framework.
  - GitHub - InsertKoinIO/koin: Koin - a pragmatic lightweight dependency injection framework for Kotlin & Kotlin Multiplatform
- MockK


  - Mocking framework for tests written in Kotlin.
  - GitHub - mockk/mockk: mocking library for Kotlin
- Robolectric


  - Test framework which enables running unit tests on a JVM that simulates an Android environment.
  - GitHub - robolectric/robolectric: Android Unit Testing Framework




### 3. Flutter


- Q FlutterNetworkMapper - MANDATORY WITH Q BACKEND


  - Q Flutter network wrapper that should enrich our backend calls with Q specific headers and handles Q specific responses.
  - https://gitlab.q-software.com/mobile/flutter_packages/flutter-network-wrapper
- flutter_bloc


  - Widgets that make it easy to integrate blocs and cubits into Flutter. Built to work with package:bloc.
  - Use if working on a big project with a lot of developers.
  - https://pub.dev/packages/flutter_bloc
- url_launcher


  - Flutter plugin for launching a URL on Android and iOS. Supports web, phone, SMS, and email schemes.
  - https://pub.dev/packages/url_launcher
- video_player


  - Flutter plugin for displaying inline video with other Flutter widgets on Android and iOS.
  - https://pub.dev/packages/video_player
- carousel_slider


  - A carousel slider widget, support infinite scroll and custom child widget.
  - GitHub - serenader2014/flutter_carousel_slider: A flutter carousel widget, support infinite scroll, and custom child widget.
- location


  - A Flutter plugin to easily handle realtime location in iOS and Android. Provides  settings for optimising performance or battery.
  - https://pub.dev/packages/location
- auto_size_text


  - Flutter widget that automatically resizes text to fit perfectly within its bounds.
  - https://pub.dev/packages/auto_size_text
- simple_animations


  - Powerful framework to create beautiful custom animations in no time.
  - https://pub.dev/packages/simple_animation
- qr_flutter


  - Library for simple and fast QR code rendering via a Widgetor custom painter.
  - https://pub.dev/packages/qr_flutter
- get


  - Open screens/snackbars/dialogs/bottomSheets without context, manage states and inject dependencies easily with GetX.
  - https://pub.dev/packages/get
- flutter_slidable


  - A Flutter implementation of slidable list item with directional slide actions that can be dismissed.
  - https://pub.dev/packages/flutter_slidable
- flushbar


  - A much more powerful and upgraded Snackbar.
  - https://pub.dev/packages/flushbar
- moor_flutter


  - SQLite ORM for data persistence.
  - Use for persisting data that rely on complicated relations.
  - https://pub.dev/packages/moor_flutter
- hive


  - Lightweight and blazing fast key-value database written in pure Dart.
  - Use for persisting data that don’t rely on complicated relations.
  - https://pub.dev/packages/hive
- freezed


  - Code generator for Immutability/Unions/Deep copying/Pattern-matching.
  - https://pub.dev/packages/freezed
- connectivity


  - A plugin for checking/intercepting network connection status.
  - https://pub.dev/packages/connectivity
- dio


  - A powerful HTTP client library for Dart.
  - https://pub.dev/packages/dio
- retrofit


  - API Generator for dio.
  - https://pub.dev/packages/retrofit
- injectable


  - Dagger equivalent, code generator for get_it
  - https://pub.dev/packages/injectable
- intl


  - Internationalization and localization facilities
  - https://pub.dev/packages/intl
- mockito


  - Mock library for Dart inspired
  - https://pub.dev/packages/mockito


## CI/CD


### 1. About CI/CD


Continuous integration and delivery is a must have practice in an agile environment. Software is produced in short cycles using streamlined and repeatable process.


Continuous integration (CI) is the process of merging the code of all developers into a main source code, so that developers can find and fix the issues as soon as possible. The main goal of CI is to provide faster feedback and speed up the development process. Fixing bugs early on is cheaper than putting it off till it’s too late.


Our mandatory steps in CI are:






- Gets access to Source Code Control
- Static analysis


  - Using our lint rules
- Compile and build the app
- Runs automated tests
- Reports on problems
- Team fixes the issues and restarts the flow by pushing the code






Continuous delivery (CD) is an extension to continuous integration where the working software can be released to the end users at any time. The process of continuous delivery adds extra steps to the above mentioned CI process, which are:






- Packaging application
- Code Sign (if needed)
- Deploying the application to specific environments (Staging and Production)


  - Upload a build to BrowserStack so QA can start testing
  - Upload a build to TestFlight and/or Google Play for testing
- Report about a new version to project's Slack channel















### 2. About Bitrise


For continuous integration and continuous delivery we are using cloud service Bitrise.


When setting up a new project on Bitrise, there is a simple step-by-step procedure which includes:







- Connecting to project's Git repository
- Setting up Apple and Google accounts so they can be used for releasing
- Adding Apple certificates and provisions
- Adding Android keystore file and info







Project tech lead is responsible for setting up Bitrise application for the project. We are using ORG payment plan which gives us two concurrent builds.


All apps must be added to the Q organisation under Bitrise.


Main part of Bitrise are workflows. A workflow is a list of steps that are performed one after the other. They cover all needed operations like downloading of dependencies, static analysis, unit testing, building, code signing, deploying etc. Steps are open-source and very easy to add to the workflow either via drag&drop or a config file (bitrise.yml).


Workflows are triggered by git actions done on connected git repository. Pull request triggers our build-only workflows while pushing a release branch triggers our deploying workflows. For more information about git branches and their purpose visit our GitFlow subpage.


Bitrise also takes care of our unit test reports after each build.





Be sure to check Watch button on apps Dashboard to be able to receive email notifications.


Every developer will be introduced to Bitrise and how to use it quickly after they join our team.


### 3. Bitrise Workflows


All project types use minimum of three workflows:


- pull_request - Triggered when making a pull request on develop branch.


  - Connect to Git location
  - Download dependencies
  - Runs static analysis
  - Increment a build number by 1
  - Runs a debug build
  - Runs unit tests
  - Notify on email via Gitlab pipeline when done (fail or success)
  - After pull request workflow is success, we do the merge by hand.
- deploy_staging_test - Deploying on a staging environment. Triggered when pushing a branch named release-staging-v*
- deploy_production_test - Deploying on a production environment. Triggered when pushing a branch named release-production-v*
- Both deployment workflows do the following:


  - Connect to Git location
  - Download dependencies
  - Runs static analysis
  - Runs unit tests
  - Increment a build number by 1
  - Build a release build for STAGING or PRODUCTION environment
  - Code sign a release build
  - Upload a build to BrowserStack so QA can start testing
  - Deploy the iOS app to TestFlight, Android app to GooglePlay Beta testing
  - On fail, send email notification
  - On Success, send email notification and Slack notification to a channel dedicated for the project


Workflows are different for iOS, Android and Flutter since building and deploying procedure is a bit different.











Deploy to the store is always done by hand!


Example of UI represenation of deploy_staging_test workflow for flutter project








### 4. Bitrise code signing


#### 4.1 iOS provision profiles and keys


When working with iOS or Flutter project, we need to setup code signing part of Bitrise. This consists of uploading developer and production .p12 keys and provision profiles which should be generated on Appstore account.


Unless a project demands differently, we are using Q Appstore developer account.


Please contact your team lead if you need an access to the account or if you are missing .p12 or .p8 keys.


#### 4.2. Android keystore


In order to sign release versions of our Android builds, we must include Keystore file and information.


Both iOS and Android code signing files should be created by a senior developer on the project.


Importing provision profiles and keys:





Importing Android keystore file and info





### 5. Bitrise variables


#### 5.1 Environment variables


Bitrise uses environment variables that hold all information that are project specific. This way we can copy-paste the same setup and just change the values.


Some of the variables that might take some explaining:


- TEAM_ID_NUMBER


  - is one of the variables that we use for our Appstore connect deploy step and should not be confused with the alphanumeric TEAM_ID that can be found on Appstore account page.
- BITRISE_PROJECT_PATH_IOS


  - Used on iOS projects to store the location of the main project workspace
- APP_ID_NUMBER_IOS


  - App id that represents the iOS application on the appstore.
- TEAM_ID_IOS


  - Team ID of our appstore account. It can be found under Membership Information section on Apple’s Developer Center.
- BUNDLE_ID_IOS


  - Unique identifier of our iOS application.
- BITRISE_SCHEME


  - Name of the Xcode scheme that we want to use for building. Scheme defines what environment we are using.
  - We are using these schemes: dev, prod and staging
- BITRISE_EXPORT_METHOD


  - We can use debug or release.
  - debug is used on pull_request workflow since we don’t have to make a distributable build.
  - release is used for distribute_staging and distribute_production workflows since we have to distribute those build.
- FLUTTER_BUILD_CMD


  - When using a flutter project, the value of this variable is appended to flutter build step.


    - For pull_request workflow we are building a debug version on dev environment


      - --flavor dev -t lib/main/main_dev.dart
    - For distribute_staging workflow we are building a release version on staging environment


      - --release --flavor staging -t /lib/main/main_staging.dart
    - For distribute_production workflow we are building a release version on production environment


      - --release --flavor prod -t /lib/main/main_prod.dart


Since some of the variables are different depending on what workflow we are using, their values are defined per workflow.


All of these variables (and a few more) are defined inside of our Bitrise config so you don’t have to add them manually. All you have to do is make sure that their values correspond to you new project.





To get the TEAM_ID_NUMBER for your account use this steps:


f you are not on your Mac, you can get it through the iTunes connect website.


- Login to itunesconnect (https://itunesconnect.apple.com/)
- Get output (JSON) from (https://itunesconnect.apple.com/WebObjects/iTunesConnect.woa/ra/user/detail)
- You can now get your iTunes Connect ids from the associatedAccounts array with the different contentProvider objects - the entry named contentProviderId reflects the iTunes Connect id, lookup for the name value to pick the correct one


Source: team_id does not automatically select correct team when provisioning in iTunes Connect · Issue #4301 · fastlane/fastlane 


#### 5.2 Secret variables


Secret variables are used to store sensitive information. Just as Environment variables, they are used by workflow steps.


They are not saved inside of the Bitrise config, so we have to add them manually every time we create a new project.


Secret variables that we use in our projects:






- APP_ID = mobile@q.agency


  - For iOS we are storing Appstore connect developer account username and password.
- APPLE_ID_PASSWORD


  - is the variable that holds the Appstore portal password and must be set as protected.
- TESTERS_INTERNAL


  - List of internal emails (devs, QA, PM) separated by a comma to which you want to send an invite when a new build is up.
- SLACK_WEBHOOK_URL


  - A webhook url for Slack that is used when publishing a new build notification to project’s group.
  - Please refer here for instructions on how to make a webhook


    - https://devcenter.bitrise.io/webhooks/adding-a-slack-webhook/
- BROWSERSTACK_USERNAME = mobile@q.agency


  - Username used to login to the Q’s Browserstack account so Bitrise can upload the binary for testing.
- BROWSERSTACK_ACCESS_KEY


  - Access key that is used when identifying with Browserstack
  - Contact your team lead to send you this key via Zoho together with mobile@q.agency password.
- APP_SPECIFIC_PASS


  - This key must be used in order to avoid 2FA with Apple when uploading a build to TestFlight







mobile@q.agency passwords (for Appstore, Bitrise or Browserstack) can be found in Q Zoho vault. Please contact your team leader to share it with you.


How to generate an app-specific password








1. Sign in to your Apple ID account page.
2. In the Security section, click Generate Password below App-Specific Passwords.
3. Follow the steps on your screen.











 



### 6. Bitrise triggers


Workflows are started via GIT actions. In Bitrise they are called triggers and can be defined inside UI or Bitrise config and should be the same for every project.


We have only 3 triggers:


- Pushing code to release-staging-v* runs a distribute_staging workflow on that branch
- Pushing code to release-production-v* runs a distribute_production workflow on that branch
- Making a merge request on develop branch runs a pull_request workflow on that branch


Push triggers in UI mode:








Pull request trigger in UI mode:





Be aware that, in order for triggers to work, you must create a Git Webhook. You can find out the webhook URL for your repository’s hosting provider on the Code tab.


Example of Incoming webhook setup on Bitrise:





GitLab - setup & usage:


All you have to do is register your bitrise-webhooks URL for a GitLab project.


1. Open your project on GitLab.com
2. Go to Settings of the project
3. Select Web Hooks
4. Specify the bitrise-webhooks URL (.../h/gitlab/BITRISE-APP-SLUG/BITRISE-APP-API-TOKEN) in the URL field
5. In the Trigger section select:


- Push events
- Tag push events
- Merge Request events


1. Click Add Web Hook


That's all! The next time you push code, push a new tag or create/update a merge request a build will be triggered (if you have Trigger mapping defined for the event(s) on Bitrise).


### 7. Bitrise configs


Bitrise config is stored inside a file called bitrise.yml on Bitrise website and every project has its own.


After a new bitrise project is created and connected to our gitlab, first thing we should do is copy/paste our default bitrise config which will setup everything concerning our CI/CD solution except secure variables and code signing information & files.


Config reflects the UI presentation of steps, variables and triggers.


Bitrise config files for iOS, Android, Flutter should be used as a template when creating a new project


Here are configs for all three platforms:


```

Here is an example of our Jenz Flutter app Bitrise config file:
---format_version: '8'default_step_lib_source: https://github.com/bitrise-io/bitrise-steplib.gitproject_type: flutterworkflows:  pull_request:    steps:    - activate-ssh-key@4:        run_if: '{{getenv "SSH_RSA_PRIVATE_KEY" | ne ""}}'    - git-clone@4: {}    - certificate-and-profile-installer@1: {}    - flutter-installer@0:        inputs:        - version: ''        - installation_bundle_url: https://storage.googleapis.com/flutter_infra/releases/stable/macos/flutter_macos_1.22.6-stable.zip        - is_debug: 'true'        is_always_run: true    - flutter-build@0:        inputs:        - project_location: "$BITRISE_FLUTTER_PROJECT_LOCATION"        - android_additional_params: "$FLUTTER_BUILD_CMD"        - platform: android        - is_debug_mode: 'true'        - cache_level: none        - ios_additional_params: "$FLUTTER_BUILD_CMD"    - slack@3:        inputs:        - webhook_url: "$SLACK_WEBHOOK_URL"        - text: ":uuu:"        - footer: Q Agency        - channel: "$SLACK_MOBILE"        is_always_run: false    - deploy-to-bitrise-io@1:        inputs:        - is_enable_public_page: 'false'        - notify_user_groups: none    envs:    - opts:        is_expand: false      BITRISE_SCHEME: dev    - opts:        is_expand: false      BITRISE_EXPORT_METHOD: debug    - opts:        is_expand: false      FLUTTER_BUILD_CMD: "--debug --flavor dev -t lib/main/main_dev.dart"    before_run: []    description: Run on every push to the development branch. It should build the      app in development mode and run tests after. Using DEVELOPMENT environment.  distribute_staging:    steps:    - activate-ssh-key@4:        run_if: '{{getenv "SSH_RSA_PRIVATE_KEY" | ne ""}}'        title: Activate SSH key    - git-clone@4: {}    - file-downloader@1:        inputs:        - destination: "$HOME/keystores/prod.jks"        - source: "$BITRISEIO_ANDROID_KEYSTORE_URL"        title: Download Keystore    - certificate-and-profile-installer@1:        title: Certificate and profiles    - flutter-installer@0:        inputs:        - installation_bundle_url: https://storage.googleapis.com/flutter_infra/releases/stable/macos/flutter_macos_1.22.6-stable.zip        - version: ''        - is_update: 'false'    - flutter-build@0:        inputs:        - project_location: "$BITRISE_FLUTTER_PROJECT_LOCATION"        - android_additional_params: "$FLUTTER_BUILD_CMD"        - cache_level: none        - ios_additional_params: "$FLUTTER_BUILD_CMD"    - change-android-versioncode-and-versionname@1:        inputs:        - build_gradle_path: "$GRADLE_BUILD_LOCATION"        is_always_run: true        title: Android Build Number    - deploy-to-bitrise-io@1:        title: Deploy Android        inputs:        - notify_email_list: "$TESTERS_INTERNAL"    - slack@3:        inputs:        - webhook_url: "$SLACK_WEBHOOK_URL_RELEASES"        - text: ":android: Build $BITRISE_BUILD_NUMBER"        - footer: Q Agency        - emoji: ":android:"        - pretext: "*Android version uploaded to Bitrise and BrowserStack*"        - channel: "$SLACK_MOBILE"        is_always_run: false        title: Slack message - Android    - browserstack-app-live-upload@1:        inputs:        - browserstack_username: "$BROWSERSTACK_USERNAME"        - browserstack_access_key: "$BROWSERSTACK_ACCESS_KEY"        - apk_ipa_filepath: "$BITRISE_APK_PATH"        title: Browserstack  Android    - set-xcode-build-number@1:        inputs:        - plist_path: "$INFO_PLIST_LOCATION"        title: iOS Build Number    - xcode-archive@3:        inputs:        - export_method: "$BITRISE_EXPORT_METHOD"        - configuration: ''        - project_path: "$BITRISE_PROJECT_PATH_IOS"        title: Xcode Archive    - firebase-dsym-upload@2:        inputs:        - fdu_google_services_location: "./ios/Runner/GoogleService-Info.plist"        - fdu_fabric_location: "./ios/Pods/FirebaseCrashlytics/upload-symbols"    - deploy-to-itunesconnect-application-loader@0:        inputs:        - password: "$APPLE_ID_PASSWORD"        - app_password: "$APP_SPECIFIC_PASS"        - itunescon_user: "$APPLE_ID"        title: Deploy to TestFlight    - browserstack-app-live-upload@1:        inputs:        - browserstack_username: "$BROWSERSTACK_USERNAME"        - browserstack_access_key: "$BROWSERSTACK_ACCESS_KEY"        - apk_ipa_filepath: "$BITRISE_IPA_PATH"        title: Browserstack iOS    - slack@3:        inputs:        - webhook_url: "$SLACK_WEBHOOK_URL_RELEASES"        - text: ":apple: Build $BITRISE_BUILD_NUMBER"        - footer: Q Agency        - emoji: ":apple:"        - buttons: ''        - pretext: "*iOS version deployed to TestFlight and BrowserStack*"        - channel: "$SLACK_MOBILE"        is_always_run: false        title: Slack message - iOS    envs:    - opts:        is_expand: false      BITRISE_SCHEME: staging    - opts:        is_expand: false      BITRISE_EXPORT_METHOD: app-store    - opts:        is_expand: false      FLUTTER_BUILD_CMD: "--release --flavor staging -t lib/main/main_staging.dart"    before_run: []    description: Run on every push to the release-staging-v* branch. It should build      the app in release mode, run tests, deploy to Browserstack, GooglePlay and TestFlight.      Using STAGING environment.  distribute_production:    steps:    - activate-ssh-key@4:        run_if: '{{getenv "SSH_RSA_PRIVATE_KEY" | ne ""}}'        title: Activate SSH key    - git-clone@4: {}    - file-downloader@1:        inputs:        - destination: "$HOME/keystores/prod.jks"        - source: "$BITRISEIO_ANDROID_KEYSTORE_URL"        title: Download Keystore    - certificate-and-profile-installer@1:        title: Certificate and profiles    - flutter-installer@0:        inputs:        - installation_bundle_url: https://storage.googleapis.com/flutter_infra/releases/stable/macos/flutter_macos_1.22.6-stable.zip        - is_debug: 'true'        - version: ''    - flutter-build@0:        inputs:        - project_location: "$BITRISE_FLUTTER_PROJECT_LOCATION"        - android_additional_params: "$FLUTTER_BUILD_CMD"        - is_debug_mode: 'true'        - cache_level: none        - ios_additional_params: "$FLUTTER_BUILD_CMD"    - change-android-versioncode-and-versionname@1:        inputs:        - build_gradle_path: "$GRADLE_BUILD_LOCATION"        is_always_run: true        title: Android Build Number    - script@1:        inputs:        - content: |-            #!/bin/bash            set -ex
            # config            new_ipa_path="${BITRISE_DEPLOY_DIR}/JenzProd-${BITRISE_BUILD_NUMBER}.apk"
            # rename the ipa            mv "$BITRISE_APK_PATH" "$new_ipa_path"            # expose the new path/value as an env var, for the same key            # overwriting the previous value            envman add --key BITRISE_APK_PATH --value "$new_ipa_path"        title: Change APK name    - deploy-to-bitrise-io@1:        title: Deploy Android        inputs:        - notify_email_list: "$TESTERS_INTERNAL"    - browserstack-app-live-upload@1:        inputs:        - browserstack_username: "$BROWSERSTACK_USERNAME"        - browserstack_access_key: "$BROWSERSTACK_ACCESS_KEY"        - apk_ipa_filepath: "$BITRISE_APK_PATH"        title: Browserstack  Android    - slack@3:        inputs:        - webhook_url: "$SLACK_WEBHOOK_URL_RELEASES"        - text: ":android: Build $BITRISE_BUILD_NUMBER"        - footer: Q Agency        - emoji: ":android:"        - pretext: "*Android version uploaded to Bitrise and BrowserStack*"        - channel: "$SLACK_DEV"        is_always_run: false        title: Slack message - Android    - set-xcode-build-number@1:        inputs:        - plist_path: "$INFO_PLIST_LOCATION"        title: iOS Build Number    - xcode-archive@3:        inputs:        - export_method: "$BITRISE_EXPORT_METHOD"        - configuration: ''        - project_path: "$BITRISE_PROJECT_PATH_IOS"        title: Xcode Archive    - firebase-dsym-upload@2:        inputs:        - fdu_google_services_location: "./ios/Runner/GoogleService-Info.plist"        - fdu_fabric_location: "./ios/Pods/FirebaseCrashlytics/upload-symbols"    - script@1:        inputs:        - content: |-            #!/bin/bash            set -ex
            # config            new_ipa_path="${BITRISE_DEPLOY_DIR}/JenzProd-${BITRISE_BUILD_NUMBER}.ipa"
            # rename the ipa            mv "$BITRISE_IPA_PATH" "$new_ipa_path"            # expose the new path/value as an env var, for the same key            # overwriting the previous value            envman add --key BITRISE_IPA_PATH --value "$new_ipa_path"        title: Change IPA Filename    - deploy-to-itunesconnect-application-loader@0:        inputs:        - password: "$APPLE_ID_PASSWORD"        - app_password: "$APP_SPECIFIC_PASS"        - itunescon_user: "$APPLE_ID"        title: Deploy to TestFlight    - browserstack-app-live-upload@1:        inputs:        - browserstack_username: "$BROWSERSTACK_USERNAME"        - browserstack_access_key: "$BROWSERSTACK_ACCESS_KEY"        - apk_ipa_filepath: "$BITRISE_IPA_PATH"        title: Browserstack iOS    - slack@3:        inputs:        - webhook_url: "$SLACK_WEBHOOK_URL"        - text: ":apple: Build $BITRISE_BUILD_NUMBER"        - footer: Q Agency        - emoji: ":apple:"        - buttons: ''        - pretext: "*iOS version deployed to TestFlight and BrowserStack*"        - channel: "$SLACK_DEV"        is_always_run: false        title: Slack message - iOS    envs:    - opts:        is_expand: false      BITRISE_SCHEME: prod    - opts:        is_expand: false      BITRISE_EXPORT_METHOD: app-store    - opts:        is_expand: false      FLUTTER_BUILD_CMD: "--release --flavor prod -t lib/main/main_prod.dart"    before_run: []    description: Run on every push to the release-production-v* branch. It should      build the app in release mode, run tests, deploy to Browserstack, GooglePlay      and TestFlight. Using PRODUCTION environment.  dist:    steps:    - activate-ssh-key@4:        run_if: '{{getenv "SSH_RSA_PRIVATE_KEY" | ne ""}}'        title: Activate SSH key    - git-clone@4: {}    - file-downloader@1:        inputs:        - destination: "$HOME/keystores/prod.jks"        - source: "$BITRISEIO_ANDROID_KEYSTORE_URL"        title: Download Keystore    - flutter-installer@0:        inputs:        - installation_bundle_url: https://storage.googleapis.com/flutter_infra/releases/stable/macos/flutter_macos_1.22.6-stable.zip        - is_debug: 'true'        - version: ''    - flutter-build@0:        inputs:        - project_location: "$BITRISE_FLUTTER_PROJECT_LOCATION"        - android_additional_params: "$FLUTTER_BUILD_CMD"        - is_debug_mode: 'true'        - cache_level: none        - platform: android        - ios_additional_params: "$FLUTTER_BUILD_CMD"    - script@1:        inputs:        - is_debug: 'yes'        - content: |-            #!/bin/bash            set -ex
            # config            new_ipa_path="${BITRISE_DEPLOY_DIR}/JenzProd-${BITRISE_BUILD_NUMBER}.apk"
            # rename the ipa            mv "$BITRISE_APK_PATH" "$new_ipa_path"            # expose the new path/value as an env var, for the same key            # overwriting the previous value            envman add --key BITRISE_APK_PATH --value "$new_ipa_path"    - deploy-to-bitrise-io@1:        inputs:        - is_enable_public_page: 'false'        - notify_user_groups: none    envs:    - opts:        is_expand: false      BITRISE_SCHEME: prod    - opts:        is_expand: false      BITRISE_EXPORT_METHOD: app-store    - opts:        is_expand: false      FLUTTER_BUILD_CMD: "--release --flavor prod -t lib/main/main_prod.dart"    before_run: []    description: Run on every push to the release-production-v* branch. It should      build the app in release mode, run tests, deploy to Browserstack, GooglePlay      and TestFlight. Using PRODUCTION environment.app:  envs:  - opts:      is_expand: false    BITRISE_FLUTTER_PROJECT_LOCATION: "."  - opts:      is_expand: false    BITRISE_PROJECT_PATH_IOS: "./ios/Runner.xcworkspace"  - opts:      is_expand: false    INFO_PLIST_LOCATION: "./ios/Runner/Info.plist"  - opts:      is_expand: false    GRADLE_BUILD_LOCATION: "./android/app/build.gradle"  - opts:      is_expand: false    APP_ID_NUMBER_IOS: '1543452914'  - opts:      is_expand: false    TEAM_ID_NUMBER_IOS: '122561185'  - opts:      is_expand: false    TEAM_ID_IOS: HZW42CJVRJ  - opts:      is_expand: false    BUNDLE_ID_IOS: com.jenz.jenz  - opts:      is_expand: false    TEAM_NAME_IOS: Jenz.app d.o.o.  - opts:      is_expand: false    SLACK_MOBILE: "#dev-jenz-mobile"  - opts:      is_expand: false    SLACK_DEV: "#dev-jenz"trigger_map:- push_branch: release-staging-v*  workflow: distribute_staging- push_branch: release-production-v*  workflow: distribute_production

```














 2022. All information contained herein is the Q's sole property and Q reserves all rights regarding the use of the information. Any unauthorised use (including, but not limited to copying, distributing, sharing in any form) is not permitted. All content must be kept with the highest level of confidentiality.