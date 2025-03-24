
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlusIcon } from "lucide-react";

interface Contact {
  id: string;
  name: string;
  role: string;
  avatarUrl?: string;
  badgeText?: string;
  badgeColor?: string;
}

export function ConnectSection() {
  const contacts: Contact[] = [
    {
      id: "c1",
      name: "Randy Crouse",
      role: "Cybersecurity specialist",
      avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg",
      badgeText: "Senior",
      badgeColor: "bg-orange-500 text-white"
    },
    {
      id: "c2",
      name: "Giana Schleifer",
      role: "UX/UI Designer",
      avatarUrl: "https://randomuser.me/api/portraits/women/44.jpg",
      badgeText: "Middle",
      badgeColor: "bg-blue-400 text-white"
    }
  ];

  return (
    <Card className="overflow-hidden bg-white/95 border-0 shadow-sm h-full">
      <CardHeader className="px-6 pt-6 pb-2 flex flex-row items-center justify-between">
        <CardTitle className="text-xl font-semibold">Let's Connect</CardTitle>
        <Button variant="outline" size="sm" className="text-xs bg-gray-50 border-gray-200 text-gray-700">
          See all
        </Button>
      </CardHeader>
      <CardContent className="p-3">
        <div className="space-y-1">
          {contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function ContactCard({ contact }: { contact: Contact }) {
  return (
    <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50">
      <div className="flex items-center gap-3">
        <Avatar className="h-10 w-10 border border-gray-100">
          <AvatarImage src={contact.avatarUrl} alt={contact.name} />
          <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-medium text-sm">{contact.name}</h3>
            {contact.badgeText && (
              <Badge className={`text-[10px] px-1.5 ${contact.badgeColor}`}>
                {contact.badgeText}
              </Badge>
            )}
          </div>
          <p className="text-xs text-gray-500">{contact.role}</p>
        </div>
      </div>
      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-gray-100 hover:bg-gray-200">
        <PlusIcon className="h-4 w-4" />
      </Button>
    </div>
  );
}
