
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#F4F4F4] to-[#F9F9F9] bg-[url('https://image.lexica.art/full_webp/00e518e6-df86-4362-a76e-0bd60444a2ce')] bg-cover bg-center">
          <div className="container px-4 md:px-6 space-y-8 md:space-y-12">
            <div className="text-center space-y-4">
            <link href="https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap" rel="stylesheet"></link>
              <h1 style={{fontFamily:"Homemade Apple"}} className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Aaina-e-Adab</h1>
              <p className="max-w-[800px] mx-auto text-muted-foreground md:text-xl">
                Indias first national online literature festival, celebrating the transition from traditional print to
                digital storytelling.
              </p>
            </div>
            <div className="flex justify-center">
              <Button
                // href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Attend Now
              </Button>
            </div>
          </div>
        </section>
        <section id="schedule" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 space-y-8 md:space-y-12">
            <div className="text-center space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Festival Schedule</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Explore the Festival Program</h2>
              <p className="max-w-[800px] mx-auto text-muted-foreground md:text-xl">
                Discover the diverse range of events, panels, and workshops happening throughout the festival.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle>Opening Ceremony</CardTitle>
                  <CardDescription>
                    Join us for the official launch of Aaina-e-Adab, Indias first national online literature festival.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CalendarIcon className="w-4 h-4" />
                    <span>April 1, 2023</span>
                    <ClockIcon className="w-4 h-4" />
                    <span>5:00 PM IST</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle>Panel Discussion</CardTitle>
                  <CardDescription>
                    Explore the future of digital storytelling with our esteemed panel of authors and publishers.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CalendarIcon className="w-4 h-4" />
                    <span>April 3, 2023</span>
                    <ClockIcon className="w-4 h-4" />
                    <span>3:00 PM IST</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle>Poetry Reading</CardTitle>
                  <CardDescription>
                    Join us for an evening of captivating poetry readings by renowned Indian poets.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CalendarIcon className="w-4 h-4" />
                    <span>April 5, 2023</span>
                    <ClockIcon className="w-4 h-4" />
                    <span>7:00 PM IST</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle>Writing Workshop</CardTitle>
                  <CardDescription>
                    Improve your creative writing skills with our expert-led workshop on character development.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CalendarIcon className="w-4 h-4" />
                    <span>April 7, 2023</span>
                    <ClockIcon className="w-4 h-4" />
                    <span>11:00 AM IST</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle>Author Spotlight</CardTitle>
                  <CardDescription>
                    Hear from acclaimed Indian author Amitav Ghosh as he discusses his latest work.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CalendarIcon className="w-4 h-4" />
                    <span>April 9, 2023</span>
                    <ClockIcon className="w-4 h-4" />
                    <span>4:00 PM IST</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle>Book Launch</CardTitle>
                  <CardDescription>
                    Celebrate the launch of Namita Gokhales latest novel, Things to Leave Behind.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CalendarIcon className="w-4 h-4" />
                    <span>April 11, 2023</span>
                    <ClockIcon className="w-4 h-4" />
                    <span>6:00 PM IST</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="speakers" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#F4F4F4] to-[#F9F9F9]">
          <div className="container px-4 md:px-6 space-y-8 md:space-y-12">
            <div className="text-center space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Featured Speakers</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet Our Esteemed Speakers</h2>
              <p className="max-w-[800px] mx-auto text-muted-foreground md:text-xl">
                Discover the diverse range of authors, poets, and literary experts participating in Aaina-e-Adab.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="border-0 shadow-md">
                <CardHeader className="flex flex-col items-center">
                  <Avatar className="w-20 h-20 border-2 border-primary">
                    <AvatarImage src="/placeholder-user.jpg" alt="Amitav Ghosh" />
                    <AvatarFallback>AG</AvatarFallback>
                  </Avatar>
                  <CardTitle className="mt-4">Amitav Ghosh</CardTitle>
                  <CardDescription>Acclaimed Indian Author</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Amitav Ghosh is an Indian writer known for his works of fiction, including The Hungry Tide and
                    The Ibis Trilogy. He is a recipient of the Padma Shri and Sahitya Akademi Award.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-md">
                <CardHeader className="flex flex-col items-center">
                  <Avatar className="w-20 h-20 border-2 border-primary">
                    <AvatarImage src="/placeholder-user.jpg" alt="Namita Gokhale" />
                    <AvatarFallback>NG</AvatarFallback>
                  </Avatar>
                  <CardTitle className="mt-4">Namita Gokhale</CardTitle>
                  <CardDescription>Novelist and Festival Director</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Namita Gokhale is an Indian writer, publisher, and festival director. She is the co-founder and
                    co-director of the Jaipur Literature Festival and the author of numerous novels, including Things
                    to Leave Behind.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-md">
                <CardHeader className="flex flex-col items-center">
                  <Avatar className="w-20 h-20 border-2 border-primary">
                    <AvatarImage src="/placeholder-user.jpg" alt="Tishani Doshi" />
                    <AvatarFallback>TD</AvatarFallback>
                  </Avatar>
                  <CardTitle className="mt-4">Tishani Doshi</CardTitle>
                  <CardDescription>Poet and Novelist</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Tishani Doshi is an Indian poet and novelist. She is the author of several collections of poetry,
                    including Girls Are Coming\n Out of the Woods, and the novel The Pleasure Seekers.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-md">
                <CardHeader className="flex flex-col items-center">
                  <Avatar className="w-20 h-20 border-2 border-primary">
                    <AvatarImage src="/placeholder-user.jpg" alt="Jeet Thayil" />
                    <AvatarFallback>JT</AvatarFallback>
                  </Avatar>
                  <CardTitle className="mt-4">Jeet Thayil</CardTitle>
                  <CardDescription>Poet and Novelist</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Jeet Thayil is an Indian poet, novelist, and musician. He is the author of several poetry
                    collections, including These Errors\n Are Correct, and the novel Narcopolis.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-md">
                <CardHeader className="flex flex-col items-center">
                  <Avatar className="w-20 h-20 border-2 border-primary">
                    <AvatarImage src="/placeholder-user.jpg" alt="Shashi Tharoor" />
                    <AvatarFallback>ST</AvatarFallback>
                  </Avatar>
                  <CardTitle className="mt-4">Shashi Tharoor</CardTitle>
                  <CardDescription>Author and Politician</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Shashi Tharoor is an Indian politician, diplomat, and author. He has written numerous non-fiction
                    books, including An Era of\n Darkness and The Paradoxical Prime Minister.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-md">
                <CardHeader className="flex flex-col items-center">
                  <Avatar className="w-20 h-20 border-2 border-primary">
                    <AvatarImage src="/placeholder-user.jpg" alt="Anita Nair" />
                    <AvatarFallback>AN</AvatarFallback>
                  </Avatar>
                  <CardTitle className="mt-4">Anita Nair</CardTitle>
                  <CardDescription>Novelist and Essayist</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Anita Nair is an Indian novelist and essayist. She is the author of several acclaimed novels,
                    including The Better Man and Mistress.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="engage" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 space-y-8 md:space-y-12">
            <div className="text-center space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Ways to Engage</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Participate in the Festival</h2>
              <p className="max-w-[800px] mx-auto text-muted-foreground md:text-xl">
                Explore the diverse range of events, panels, and workshops happening throughout the festival.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function CalendarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function ClockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}
