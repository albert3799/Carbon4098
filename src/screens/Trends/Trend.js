import React from 'react';
import { TopBar } from '../../components/TopBar';
import "./trend.css"
import { Trendvis } from '../../components/Trendvis';

export function Trend (){
  return (
    <div className='trend-wrapper'>
           <TopBar hideLogo={false}/>
        <div className='trend-body'>
            <div className='header'> 
            <h1>The EU Ets success or failure</h1></div>
            <div className='subHeader'><h5>The following visual shows the activities which are meeting allocaitons and other who are emmiting more and by how much </h5></div>
            <div className='visual-Container'> <Trendvis></Trendvis></div>
            <div className='text-body'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo urna eu sapien ultricies feugiat. Nullam ultricies ligula ut urna tempor, vitae aliquam quam sagittis. Praesent eu diam ante. Integer lacinia ut elit id bibendum. Sed sodales ligula id felis mollis sollicitudin. Vestibulum semper, purus at placerat posuere, metus leo interdum justo, vel lacinia turpis nisl eu ipsum. Sed vel posuere sapien. Proin non enim non est rutrum vestibulum eget ac nisi. Aliquam posuere nibh in tellus pellentesque pharetra. Nulla facilisi. Donec non justo libero.</p>
              <p>Suspendisse potenti. Pellentesque vel enim sit amet risus volutpat ullamcorper. Integer euismod mauris et orci volutpat, ac congue metus fringilla. Sed id lectus euismod, congue orci nec, pharetra risus. Vivamus eleifend imperdiet enim ac hendrerit. Ut molestie sapien quis nulla pulvinar, at eleifend tortor tincidunt. In blandit, leo vel venenatis molestie, justo odio tincidunt sapien, vel feugiat libero orci vel justo. Fusce in libero nulla. Suspendisse vel orci varius, pellentesque lectus at, ullamcorper neque. Sed suscipit suscipit leo, vel viverra felis sagittis ac. Praesent vel tellus ante. Pellentesque commodo, nisi vel pretium rutrum, nulla velit laoreet est, vel hendrerit nulla risus non risus.</p>
              <p>Donec id dolor vel justo congue commodo nec vel lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam sodales pharetra risus, sed consequat dolor commodo eu. Suspendisse nec interdum tellus. Proin vel aliquam massa. Curabitur rutrum quis leo eget pellentesque. Ut vel sapien ante. Morbi non purus ut mi molestie dapibus. Nulla varius nulla ut fringilla placerat. Donec maximus augue eu lacus eleifend bibendum. Maecenas ac mauris ut odio facilisis tristique eget a arcu. Curabitur imperdiet eget ante vel commodo. Aenean molestie libero in mi dictum, euismod laoreet quam suscipit. </p>
            </div>

            
        </div>
    </div>
  );
};


