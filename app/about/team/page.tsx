import type { Metadata } from 'next';
import Link from 'next/link';
import { logica } from '@neup/logica';
import type { PeopleMember, PeopleMemberResponseBody } from '@neup/logica/people/members';

// Fetch the public team directory through the Sites people API.
async function getTeamMembers(): Promise<PeopleMember[]> {
  try {
    const response = await logica.sites().people.members.get();
    const body = response.body as PeopleMemberResponseBody;
    return response.ok && body.success && Array.isArray(body.data) ? body.data : [];
  } catch {
    return [];
  }
}

export const metadata: Metadata = { title: 'Our Team' };

// Render the member directory, with a fallback message when it is unavailable.
export default async function TeamPage() {
  const members = await getTeamMembers();

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="section-padding">
          <div className="container">
            <h1 className="max-w-4xl font-headline text-4xl font-semibold tracking-tighter sm:text-5xl md:text-6xl lg:text-6xl/none">Meet Our Team</h1>
            <p className="mt-4 max-w-2xl text-muted-foreground md:text-xl">Get to know the people behind Neup Group.</p>
          </div>
        </section>
        <section className="section-padding">
          <div className="container">
            {members.length ? (
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {members.map((member) => (
                  <Link key={member.slug} href={`/about/team/members/${member.slug}`} className="group">
                    <div className="flex aspect-square items-center justify-center overflow-hidden rounded-lg bg-primary/10 text-4xl font-bold text-primary/60 group-hover:bg-primary/15">
                      {(member.name || 'N').charAt(0).toUpperCase()}
                    </div>
                    <h2 className="mt-4 text-xl font-bold">{member.name}</h2>
                    <p className="font-semibold text-primary">{member.role}</p>
                  </Link>
                ))}
              </div>
            ) : <p className="text-center text-muted-foreground">Team information is unavailable right now.</p>}
          </div>
        </section>
      </main>
    </div>
  );
}
