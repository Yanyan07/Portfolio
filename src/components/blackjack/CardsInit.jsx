
const cards = [
  {id:1, rank_val:'2', suit:'hearts', isAvailable:true},
  {id:2, rank_val:'3', suit:'hearts', isAvailable:true},
  {id:3, rank_val:'4', suit:'hearts', isAvailable:true},
  {id:4, rank_val:'5', suit:'hearts', isAvailable:true},
  {id:5, rank_val:'6', suit:'hearts', isAvailable:true},
  {id:6, rank_val:'7', suit:'hearts', isAvailable:true},
  {id:7, rank_val:'8', suit:'hearts', isAvailable:true},
  {id:8, rank_val:'9', suit:'hearts', isAvailable:true},
  {id:9, rank_val:'10', suit:'hearts', isAvailable:true},
  {id:10, rank_val:'J', suit:'hearts', isAvailable:true},
  {id:11, rank_val:'Q', suit:'hearts', isAvailable:true},
  {id:12, rank_val:'K', suit:'hearts', isAvailable:true},
  {id:13, rank_val:'A', suit:'hearts', isAvailable:true},
  
  {id:14, rank_val:'2', suit:'spades', isAvailable:true},
  {id:15, rank_val:'3', suit:'spades', isAvailable:true},
  {id:16, rank_val:'4', suit:'spades', isAvailable:true},
  {id:17, rank_val:'5', suit:'spades', isAvailable:true},
  {id:18, rank_val:'6', suit:'spades', isAvailable:true},
  {id:19, rank_val:'7', suit:'spades', isAvailable:true},
  {id:20, rank_val:'8', suit:'spades', isAvailable:true},
  {id:21, rank_val:'9', suit:'spades', isAvailable:true},
  {id:22, rank_val:'10', suit:'spades', isAvailable:true},
  {id:23, rank_val:'J', suit:'spades', isAvailable:true},
  {id:24, rank_val:'Q', suit:'spades', isAvailable:true},
  {id:25, rank_val:'K', suit:'spades', isAvailable:true},
  {id:26, rank_val:'A', suit:'spades', isAvailable:true},
  
  {id:27, rank_val:'2', suit:'clubs', isAvailable:true},
  {id:28, rank_val:'3', suit:'clubs', isAvailable:true},
  {id:29, rank_val:'4', suit:'clubs', isAvailable:true},
  {id:30, rank_val:'5', suit:'clubs', isAvailable:true},
  {id:31, rank_val:'6', suit:'clubs', isAvailable:true},
  {id:32, rank_val:'7', suit:'clubs', isAvailable:true},
  {id:33, rank_val:'8', suit:'clubs', isAvailable:true},
  {id:34, rank_val:'9', suit:'clubs', isAvailable:true},
  {id:35, rank_val:'10', suit:'clubs', isAvailable:true},
  {id:36, rank_val:'J', suit:'clubs', isAvailable:true},
  {id:37, rank_val:'Q', suit:'clubs', isAvailable:true},
  {id:38, rank_val:'K', suit:'clubs', isAvailable:true},
  {id:39, rank_val:'A', suit:'clubs', isAvailable:true},
  
  {id:40, rank_val:'2', suit:'diamonds', isAvailable:true},
  {id:41, rank_val:'3', suit:'diamonds', isAvailable:true},
  {id:42, rank_val:'4', suit:'diamonds', isAvailable:true},
  {id:43, rank_val:'5', suit:'diamonds', isAvailable:true},
  {id:44, rank_val:'6', suit:'diamonds', isAvailable:true},
  {id:45, rank_val:'7', suit:'diamonds', isAvailable:true},
  {id:46, rank_val:'8', suit:'diamonds', isAvailable:true},
  {id:47, rank_val:'9', suit:'diamonds', isAvailable:true},
  {id:48, rank_val:'10', suit:'diamonds', isAvailable:true},
  {id:49, rank_val:'J', suit:'diamonds', isAvailable:true},
  {id:50, rank_val:'Q', suit:'diamonds', isAvailable:true},
  {id:51, rank_val:'K', suit:'diamonds', isAvailable:true},
  {id:52, rank_val:'A', suit:'diamonds', isAvailable:true},


  {id:53, rank_val:'2', suit:'hearts', isAvailable:true},
  {id:54, rank_val:'3', suit:'hearts', isAvailable:true},
  {id:55, rank_val:'4', suit:'hearts', isAvailable:true},
  {id:56, rank_val:'5', suit:'hearts', isAvailable:true},
  {id:57, rank_val:'6', suit:'hearts', isAvailable:true},
  {id:58, rank_val:'7', suit:'hearts', isAvailable:true},
  {id:59, rank_val:'8', suit:'hearts', isAvailable:true},
  {id:60, rank_val:'9', suit:'hearts', isAvailable:true},
  {id:61, rank_val:'10', suit:'hearts', isAvailable:true},
  {id:62, rank_val:'J', suit:'hearts', isAvailable:true},
  {id:63, rank_val:'Q', suit:'hearts', isAvailable:true},
  {id:64, rank_val:'K', suit:'hearts', isAvailable:true},
  {id:65, rank_val:'A', suit:'hearts', isAvailable:true},
  
  {id:66, rank_val:'2', suit:'spades', isAvailable:true},
  {id:67, rank_val:'3', suit:'spades', isAvailable:true},
  {id:68, rank_val:'4', suit:'spades', isAvailable:true},
  {id:69, rank_val:'5', suit:'spades', isAvailable:true},
  {id:70, rank_val:'6', suit:'spades', isAvailable:true},
  {id:71, rank_val:'7', suit:'spades', isAvailable:true},
  {id:72, rank_val:'8', suit:'spades', isAvailable:true},
  {id:73, rank_val:'9', suit:'spades', isAvailable:true},
  {id:74, rank_val:'10', suit:'spades', isAvailable:true},
  {id:75, rank_val:'J', suit:'spades', isAvailable:true},
  {id:76, rank_val:'Q', suit:'spades', isAvailable:true},
  {id:77, rank_val:'K', suit:'spades', isAvailable:true},
  {id:78, rank_val:'A', suit:'spades', isAvailable:true},
  
  {id:79, rank_val:'2', suit:'clubs', isAvailable:true},
  {id:80, rank_val:'3', suit:'clubs', isAvailable:true},
  {id:81, rank_val:'4', suit:'clubs', isAvailable:true},
  {id:82, rank_val:'5', suit:'clubs', isAvailable:true},
  {id:83, rank_val:'6', suit:'clubs', isAvailable:true},
  {id:84, rank_val:'7', suit:'clubs', isAvailable:true},
  {id:85, rank_val:'8', suit:'clubs', isAvailable:true},
  {id:86, rank_val:'9', suit:'clubs', isAvailable:true},
  {id:87, rank_val:'10', suit:'clubs', isAvailable:true},
  {id:88, rank_val:'J', suit:'clubs', isAvailable:true},
  {id:89, rank_val:'Q', suit:'clubs', isAvailable:true},
  {id:90, rank_val:'K', suit:'clubs', isAvailable:true},
  {id:91, rank_val:'A', suit:'clubs', isAvailable:true},
  
  {id:92, rank_val:'2', suit:'diamonds', isAvailable:true},
  {id:93, rank_val:'3', suit:'diamonds', isAvailable:true},
  {id:94, rank_val:'4', suit:'diamonds', isAvailable:true},
  {id:95, rank_val:'5', suit:'diamonds', isAvailable:true},
  {id:96, rank_val:'6', suit:'diamonds', isAvailable:true},
  {id:97, rank_val:'7', suit:'diamonds', isAvailable:true},
  {id:98, rank_val:'8', suit:'diamonds', isAvailable:true},
  {id:99, rank_val:'9', suit:'diamonds', isAvailable:true},
  {id:100, rank_val:'10', suit:'diamonds', isAvailable:true},
  {id:101, rank_val:'J', suit:'diamonds', isAvailable:true},
  {id:102, rank_val:'Q', suit:'diamonds', isAvailable:true},
  {id:103, rank_val:'K', suit:'diamonds', isAvailable:true},
  {id:104, rank_val:'A', suit:'diamonds', isAvailable:true}
]

export default cards;
