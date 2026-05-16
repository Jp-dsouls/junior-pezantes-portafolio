import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Validación básica del formulario
function validateForm(data: ContactFormData): { valid: boolean; error?: string } {
  if (!data.name || data.name.trim().length === 0) {
    return { valid: false, error: 'El nombre es requerido' };
  }
  if (!data.email || !data.email.includes('@')) {
    return { valid: false, error: 'Un email válido es requerido' };
  }
  if (!data.message || data.message.trim().length === 0) {
    return { valid: false, error: 'El mensaje es requerido' };
  }
  return { valid: true };
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validar los datos
    const validation = validateForm(body);
    if (!validation.valid) {
      return NextResponse.json(
        { error: validation.error },
        { status: 400 }
      );
    }

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      console.error('Falta la variable WEB3FORMS_ACCESS_KEY en el entorno');
      return NextResponse.json(
        { error: 'Configuración del servidor incompleta' },
        { status: 500 }
      );
    }

    // Enviar el email usando Web3Forms
    const formResponse = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: accessKey,
        name: body.name,
        email: body.email,
        message: body.message,
        subject: `Nuevo mensaje de contacto de ${body.name}`,
        from_name: 'Portafolio Contacto'
      })
    });

    if (!formResponse.ok) {
      throw new Error('Error al enviar el email a Web3Forms');
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Mensaje recibido y enviado correctamente',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[v0] Error en contact API:', error);
    return NextResponse.json(
      { error: 'Error al procesar el formulario' },
      { status: 500 }
    );
  }
}
