import ContentPanel from "../Components/ContentPanel"
import Announcement from "../Components/Announcement"

export default function Home() {
    return (
        <div className="p-6">
           {/* Hey */}
            <div className="box w-9/12 h-[700px] px-8"> 
                <ContentPanel title="Important Announcements">
                    <Announcement 
                        imgSrc="https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                        username="Admin" 
                        date="Sept 2, 2023 - 11:09 PM" 
                        pfp="../images/Default PFP.svg" 
                        title="Welcome to CompetitiveMath.ca" 
                        text="Lorem ipsum dolor sit amet. Et adipisci quis id dolor officiis et fugit molestiae. Et nisi perferendis et illo eveniet nam labore facere ut quia eveniet et fugit vero ea perspiciatis maxime? Est porro quisquam et aspernatur sint ut enim assumenda nam placeat accusantium. Et galisum odit qui possimus rerum est nulla ipsam ut corrupti dolore sed dolores blanditiis. Et voluptatum consequatur ex molestiae molestias est dolores ipsum ab ipsa fuga quo rerum iusto ea atque voluptas. Qui doloremque necessitatibus et aspernatur eius aut dicta illum quo consequatur molestiae in quam eaque. Ut facilis sunt ex quas tempore 33 quisquam saepe et quos officiis ut cupiditate autem qui voluptas fugiat? Hic odit explicabo non quia obcaecati ut consequatur debitis est consequatur nulla aut voluptatem galisum At veritatis praesentium."
                    />
                    <Announcement 
                        imgSrc="https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                        username="Admin" 
                        date="Sept 1, 2023 - 9:29 PM" 
                        pfp="../images/Default PFP.svg" 
                        title="Test Announcement" 
                        text="This is a test announcement with shorter text than the most recent one."
                    />
                </ContentPanel>
            </div>
        </div>
    )
}
