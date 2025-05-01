import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Form,
  FormField,
  FormLabel,
  FormControl,
  Input,
  FormMessage,
  CardFooter,
  Button,
} from "@repo/ui/components";

export default function App() {
  return (
    <div className="p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Inicio de sesión</CardTitle>
          <CardDescription>Accedé a tu cuenta</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Form>
            <FormField name="email">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" />
              </FormControl>
              <FormMessage />
            </FormField>
            <FormField name="password">
              <FormLabel>Contraseña</FormLabel>
              <FormControl>
                <Input type="password" />
              </FormControl>
              <FormMessage />
            </FormField>
          </Form>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Ingresar</Button>
        </CardFooter>
      </Card>
    </div>
  );
}